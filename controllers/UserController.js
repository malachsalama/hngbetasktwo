const User = require("../models/UserModel");

// Create a new user
const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    return res.status(201).json({
      status: "success",
      message: "User created successfully",
      data: user,
    });
  } catch (err) {
    console.error("Error creating user:", err);
    return res.status(500).send("Internal Server Error");
  }
};

// Retrieve all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).sort({ createdAt: -1 });
    return res.status(200).json({
      status: "success",
      message: "Users retrieved successfully!",
      data: users,
    });
  } catch (err) {
    console.error("Error retrieving users:", err);
    return res.status(500).send("Internal Server Error");
  }
};

// Retrieve a user by ID
const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).send("User not found");
    }
    return res.status(200).json({
      status: "success",
      message: "User retrieved successfully!",
      data: user,
    });
  } catch (err) {
    console.error("Error retrieving user:", err);
    return res.status(500).send("Internal Server Error");
  }
};

// Update a user by ID
const updateUserById = async (req, res) => {
  const { id } = req.params;
  const updatedUser = req.body;
  try {
    const user = await User.findByIdAndUpdate(id, updatedUser, {
      new: true,
    });
    if (!user) {
      return res.status(404).send("User not found");
    }
    return res.status(200).json({
      status: "success",
      message: "User updated successfully!",
      data: user,
    });
  } catch (err) {
    console.error("Error updating user:", err);
    return res.status(500).send("Internal Server Error");
  }
};

// Delete a user by ID
const deleteUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndRemove(id);
    if (!user) {
      return res.status(404).send("User not found");
    }
    return res.status(200).json({
      status: "success",
      message: "User deleted successfully!",
      data: user,
    });
  } catch (err) {
    console.error("Error deleting user:", err);
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
