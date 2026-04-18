// Import express
import exp from "express"

// Import UserModel (used to interact with MongoDB users collection)
import { UserModel } from "../models/UserModel.js"

// Create a mini express router
// This helps us organize user-related routes separately
export const UserApp = exp.Router()


// CREATE A NEW USER

UserApp.post("/users", async (req, res, next) => {
    try {
        // Create a new user using data sent in request body
        const newUser = new UserModel(req.body)

        // Save user to database
        const savedUser = await newUser.save()

        // Send success response
        res.status(201).json({
            message: "User created successfully",
            payload: savedUser
        })

    } catch (error) {
        // If any error occurs, pass it to error middleware
        next(error)
    }
})

// GET ALL USERS

UserApp.get("/users", async (req, res) => {

    // Fetch all users from database
    const allUsers = await UserModel.find()

    // Send response
    res.status(200).json({
        message: "All users",
        payload: allUsers
    })
})

// GET USER BY ID

UserApp.get("/users/:id", async (req, res) => {

    // Get user id from URL parameter
    const userId = req.params.id

    // Find user in database
    const user = await UserModel.findById(userId)

    // If user not found
    if (!user) {
        return res.status(404).json({
            message: "User not found"
        })
    }

    // Send response
    res.status(200).json({
        message: "User details",
        payload: user
    })
})


// DEACTIVATE USER (Soft Delete)
// Instead of deleting user,
// we change status to false

UserApp.delete("/users/:id", async (req, res) => {

    const userId = req.params.id

    // Update user status to false
    const updatedUser = await UserModel.findByIdAndUpdate(
        userId,
        { $set: { status: false } },
        { new: true }
    )

    // If user not found
    if (!updatedUser) {
        return res.status(404).json({
            message: "User not found"
        })
    }

    // Send response
    res.status(200).json({
        message: "User deactivated",
        payload: updatedUser
    })
})

// ACTIVATE USER
// Change status back to true

UserApp.patch("/users/:id", async (req, res) => {

    const userId = req.params.id

    // Update status to true
    const updatedUser = await UserModel.findByIdAndUpdate(
        userId,
        { $set: { status: true } },
        { new: true }
    )

    // If user not found
    if (!updatedUser) {
        return res.status(404).json({
            message: "User not found"
        })
    }

    // Send response
    res.status(200).json({
        message: "User activated",
        payload: updatedUser
    })
})