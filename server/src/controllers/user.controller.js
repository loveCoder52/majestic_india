import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";

const COOKIE_OPTIONS = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
};

const sanitizeUser = (user) => {
    const sanitized = user.toObject();
    delete sanitized.password;
    delete sanitized.refreshToken;
    return sanitized;
};

const attachTokens = async (user, res) => {
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    res.cookie("accessToken", accessToken, COOKIE_OPTIONS);
    res.cookie("refreshToken", refreshToken, { ...COOKIE_OPTIONS, maxAge: 15 * 24 * 60 * 60 * 1000 });

    return { accessToken, refreshToken };
};

const registerUser = asyncHandler(async (req, res) => {
    const { fullName, email, password, phone } = req.body;

    if ([fullName, email, password, phone].some((field) => !field?.trim?.())) {
        throw new ApiError(400, "All fields are required");
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new ApiError(409, "User with this email already exists");
    }

    const user = await User.create({
        fullName,
        email,
        password,
        phone,
    });

    await attachTokens(user, res);

    return res
        .status(201)
        .json(new ApiResponse(201, sanitizeUser(user), "User registered successfully"));
});

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new ApiError(400, "Email and password are required");
    }

    const user = await User.findOne({ email });
    if (!user) {
        throw new ApiError(401, "Invalid email or password");
    }

    const isPasswordValid = await user.isPasswordCorrect(password);
    if (!isPasswordValid) {
        throw new ApiError(401, "Invalid email or password");
    }

    await attachTokens(user, res);

    return res
        .status(200)
        .json(new ApiResponse(200, sanitizeUser(user), "Logged in successfully"));
});

const logoutUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user?._id);

    if (user) {
        user.refreshToken = undefined;
        await user.save({ validateBeforeSave: false });
    }

    res.clearCookie("accessToken", COOKIE_OPTIONS);
    res.clearCookie("refreshToken", COOKIE_OPTIONS);

    return res
        .status(200)
        .json(new ApiResponse(200, {}, "Logged out successfully"));
});

const getCurrentUser = asyncHandler(async (req, res) => {
    return res
        .status(200)
        .json(new ApiResponse(200, sanitizeUser(req.user), "Current user fetched"));
});

export { registerUser, loginUser, logoutUser, getCurrentUser };
