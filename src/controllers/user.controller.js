import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";

const registerUser = asyncHandler(async (req, res, next) => {
    const { fullName, email, password, phone } = req.body;

    // Validate empty fields
    if ([fullName, email, password, phone].some((field) => !field)) {
        throw new ApiError(400, "All fields are required");
    }

    // Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new ApiError(409, "User with this email already exists");
    }

    // Create user
    const user = await User.create({
        fullName,
        email,
        password,  // hashed inside model
        phone,
    });

    // Remove password from output
    const createdUser = await User.findById(user._id).select("-password");

    if (!createdUser) {
        throw new ApiError(500, "Failed to create user");
    }

    res.status(201).json({
        statusCode: 201,
        data: createdUser,
        message: "User registered successfully",
        success: true,
    });
});

export { registerUser };
