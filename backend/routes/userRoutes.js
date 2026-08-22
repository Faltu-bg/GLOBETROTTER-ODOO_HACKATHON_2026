const express = require("express");
const router = express.Router();

const User = require("../models/User");
const bcrypt = require("bcryptjs");

const handleUserlogin = require("../controllers/handleUserLogin");
const verification = require("../middleware/jsonverification");


// LOGIN
router.post("/api/users", handleUserlogin);


// REGISTER
router.post("/api/users/register", async (req, res) => {
    try {
        const {
            first,
            last,
            email,
            password,
            profile_photo_url
        } = req.body;

        // Validate required fields
        if (!first || !last || !email || !password) {
            return res.status(400).json({
                message:
                    "First name, last name, email and password are required"
            });
        }

        // Check existing user
        const existingUser = await User.findOne({
            email: email.toLowerCase()
        });

        if (existingUser) {
            return res.status(409).json({
                message: "Email is already registered"
            });
        }

        // Hash password
        const passwordHash = await bcrypt.hash(
            password,
            10
        );

        // Create user
        const user = await User.create({
            first: first.trim(),
            last: last.trim(),
            email: email.toLowerCase().trim(),
            password_hash: passwordHash,
            profile_photo_url:
                profile_photo_url || ""
        });

        res.status(201).json({
            message: "Account created successfully",
            user: {
                id: user._id,
                first: user.first,
                last: user.last,
                email: user.email,
                profile_photo_url:
                    user.profile_photo_url
            }
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to create account",
            error: error.message
        });
    }
});


// PROTECTED USER ROUTE
router.get(
    "/api/users",
    verification,
    (req, res) => {
        res.send("you are in");
    }
);

module.exports = router;