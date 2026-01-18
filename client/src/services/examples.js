// client/src/services/examples.js
// Real-world examples of how to structure API services

import { API_BASE_URL } from '../utils/apiConfig.js';

// ============================================================================
// PATTERN 1: Simple GET Request (No Auth)
// ============================================================================

export const getPublicData = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/public/data`);
        
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error fetching public data:', error);
        throw error;
    }
};

// Usage:
// const data = await getPublicData();

// ============================================================================
// PATTERN 2: POST Request with Body (No Auth)
// ============================================================================

export const submitContactForm = async (contactData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/contacts/submit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contactData),
        });
        
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || 'Failed to submit');
        }
        
        return data;
    } catch (error) {
        console.error('Error submitting form:', error);
        throw error;
    }
};

// Usage:
// await submitContactForm({
//     name: 'John',
//     email: 'john@example.com',
//     message: 'Hello'
// });

// ============================================================================
// PATTERN 3: Protected GET Request (Requires Auth)
// ============================================================================

export const getUserProfile = async (userId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include', // CRITICAL: Send cookies with request
        });
        
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || 'Failed to fetch profile');
        }
        
        return data;
    } catch (error) {
        console.error('Error fetching profile:', error);
        throw error;
    }
};

// Usage:
// const profile = await getUserProfile('user123');

// ============================================================================
// PATTERN 4: Protected POST Request (Create Resource)
// ============================================================================

export const createBlogPost = async (postData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include', // CRITICAL: Send cookies with request
            body: JSON.stringify(postData),
        });
        
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || 'Failed to create post');
        }
        
        return data;
    } catch (error) {
        console.error('Error creating post:', error);
        throw error;
    }
};

// Usage:
// const newPost = await createBlogPost({
//     title: 'My Blog Post',
//     content: 'Great content here',
//     category: 'Technology'
// });

// ============================================================================
// PATTERN 5: Protected PUT Request (Update Resource)
// ============================================================================

export const updateUserProfile = async (userId, updateData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include', // CRITICAL: Send cookies with request
            body: JSON.stringify(updateData),
        });
        
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || 'Failed to update profile');
        }
        
        return data;
    } catch (error) {
        console.error('Error updating profile:', error);
        throw error;
    }
};

// Usage:
// const updated = await updateUserProfile('user123', {
//     fullName: 'John Updated',
//     phone: '1234567890'
// });

// ============================================================================
// PATTERN 6: Protected DELETE Request
// ============================================================================

export const deletePost = async (postId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/posts/${postId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include', // CRITICAL: Send cookies with request
        });
        
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || 'Failed to delete post');
        }
        
        return data;
    } catch (error) {
        console.error('Error deleting post:', error);
        throw error;
    }
};

// Usage:
// await deletePost('post123');

// ============================================================================
// PATTERN 7: Upload File (with multipart/form-data)
// ============================================================================

export const uploadProfilePicture = async (file) => {
    try {
        const formData = new FormData();
        formData.append('profilePicture', file);
        
        const response = await fetch(`${API_BASE_URL}/users/profile-picture`, {
            method: 'POST',
            // Don't set Content-Type header!
            // Browser will set it automatically for FormData
            credentials: 'include', // CRITICAL: Send cookies with request
            body: formData,
        });
        
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || 'Failed to upload');
        }
        
        return data;
    } catch (error) {
        console.error('Error uploading file:', error);
        throw error;
    }
};

// Usage:
// const fileInput = document.querySelector('input[type="file"]');
// const file = fileInput.files[0];
// await uploadProfilePicture(file);

// ============================================================================
// PATTERN 8: Query Parameters (Filters, Pagination, Search)
// ============================================================================

export const searchPosts = async (query, page = 1, limit = 10) => {
    try {
        // Build URL with query parameters
        const params = new URLSearchParams({
            q: query,
            page: page,
            limit: limit,
        });
        
        const response = await fetch(`${API_BASE_URL}/posts/search?${params}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        });
        
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || 'Failed to search');
        }
        
        return data;
    } catch (error) {
        console.error('Error searching posts:', error);
        throw error;
    }
};

// Usage:
// const results = await searchPosts('technology', 1, 20);

// ============================================================================
// PATTERN 9: Handling Different Error Codes
// ============================================================================

export const advancedErrorHandling = async (userId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
            credentials: 'include',
        });
        
        const data = await response.json();
        
        // Handle different HTTP status codes
        if (response.status === 401) {
            // Unauthorized - User not logged in
            throw new Error('Please log in first');
        }
        
        if (response.status === 403) {
            // Forbidden - User doesn't have permission
            throw new Error('You don\'t have permission to access this');
        }
        
        if (response.status === 404) {
            // Not found - Resource doesn't exist
            throw new Error('User not found');
        }
        
        if (response.status === 429) {
            // Too many requests - Rate limited
            throw new Error('Too many requests. Please try again later');
        }
        
        if (response.status >= 500) {
            // Server error
            throw new Error('Server error. Please try again later');
        }
        
        if (!response.ok) {
            // Generic error
            throw new Error(data.message || 'Something went wrong');
        }
        
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

// Usage:
// try {
//     await advancedErrorHandling('user123');
// } catch (error) {
//     console.error(error.message);
// }

// ============================================================================
// PATTERN 10: Service with Retry Logic (For Unreliable Networks)
// ============================================================================

export const fetchWithRetry = async (url, options = {}, retries = 3) => {
    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(url, {
                credentials: 'include',
                ...options,
            });
            
            if (!response.ok && response.status >= 500) {
                // Only retry on server errors (5xx)
                throw new Error('Server error - retrying');
            }
            
            return response;
        } catch (error) {
            if (i === retries - 1) {
                // Last attempt failed
                throw error;
            }
            
            // Wait before retrying (exponential backoff)
            await new Promise(resolve => 
                setTimeout(resolve, Math.pow(2, i) * 1000)
            );
        }
    }
};

// Usage:
// const response = await fetchWithRetry(
//     `${API_BASE_URL}/users/me`,
//     { method: 'GET' },
//     3
// );

// ============================================================================
// PATTERN 11: Creating a Reusable Fetch Wrapper
// ============================================================================

export const apiFetch = async (endpoint, options = {}) => {
    const {
        method = 'GET',
        body = null,
        ...customOptions
    } = options;
    
    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...customOptions.headers,
            },
            credentials: 'include',
            body: body ? JSON.stringify(body) : null,
            ...customOptions,
        });
        
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || 'API Error');
        }
        
        return data;
    } catch (error) {
        console.error(`API Error at ${endpoint}:`, error);
        throw error;
    }
};

// Usage:
// GET:
// const user = await apiFetch('/users/me');

// POST:
// const result = await apiFetch('/users/login', {
//     method: 'POST',
//     body: { email: 'user@example.com', password: '123' }
// });

// PUT:
// const updated = await apiFetch('/users/123', {
//     method: 'PUT',
//     body: { name: 'Updated Name' }
// });

// DELETE:
// await apiFetch('/users/123', { method: 'DELETE' });

// ============================================================================
// PATTERN 12: Using with React Hooks
// ============================================================================

// Hook for fetching data
export const useFetch = (url) => {
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    
    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await apiFetch(url);
                setData(result);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        
        fetchData();
    }, [url]);
    
    return { data, loading, error };
};

// Usage in component:
// function UserProfile() {
//     const { data: user, loading, error } = useFetch('/users/me');
//     
//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error: {error.message}</p>;
//     
//     return <p>Welcome, {user.fullName}</p>;
// }

// ============================================================================
// IMPORTANT NOTES:
// ============================================================================
// 1. Always include: credentials: 'include'
// 2. Always catch errors
// 3. Always check response.ok before using data
// 4. Always provide user feedback (loading, error states)
// 5. For files: Use FormData, don't set Content-Type header
// 6. For pagination: Use URL query parameters
// 7. Always validate input before sending
// 8. Log errors for debugging
// 9. Use try-catch for async/await
// 10. Don't hardcode URLs - use API_BASE_URL

console.log('API Service Examples loaded. Check this file for patterns!');
