const User = require("../models/UserModel");

// Create a new user
const createUser = async (req, res) => {
  if (!req.body) {
    return res
      .status(400)
      .json({ message: "Cannot create new user without details" });
  }

  try {
    const user = new User(req.body);
    await user.save();
    return res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error("Error creating user:", err);
    return res.status(500).send("Internal Server Error");
  }
};

// Retrieve all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    return res.json(users);
  } catch (err) {
    console.error("Error retrieving users:", err);
    return res.status(500).send("Internal Server Error");
  }
};

// Retrieve a user by ID
const getUserById = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send("User not found");
    }
    return res.json(user);
  } catch (err) {
    console.error("Error retrieving user:", err);
    return res.status(500).send("Internal Server Error");
  }
};

// Update a user by ID
const updateUserById = async (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;
  try {
    const user = await User.findByIdAndUpdate(userId, updatedUser, {
      new: true,
    });
    if (!user) {
      return res.status(404).send("User not found");
    }
    return res.json({ message: "User updated successfully!" });
  } catch (err) {
    console.error("Error updating user:", err);
    return res.status(500).send("Internal Server Error");
  }
};

// Delete a user by ID
const deleteUserById = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findByIdAndRemove(userId);
    if (!user) {
      return res.status(404).send("User not found");
    }
    return res.json({ message: "User deleted successfully!" });
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
