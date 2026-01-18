import React from 'react';

function Pages() {
    return (
        <div>
            {/* Topbar starts */}
            <div className="hidden lg:flex bg-gray-900 text-gray-300 text-sm">
                <div className="max-w-7xl mx-auto flex justify-between w-full px-6 py-2">
                    <div className="flex gap-6">
                        <span>📍 123 Street, New York, USA</span>
                        <span>⏰ Mon - Fri : 09.00 AM - 09.00 PM</span>
                    </div>
                    <div className="flex gap-4">
                        <span>📞 +012 345 6789</span>
                        <div className="flex gap-3">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-linkedin-in"></i>
                            <i className="fab fa-instagram"></i>
                        </div>
                    </div>
                </div>
            </div>
            {/* Topbar ends*/}
            <h1>this is my page(feature, order, etc.. )</h1>
        </div>
    );
}

export default Pages;
