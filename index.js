const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 3000;
require("dotenv").config();

app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Mongoose schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

// Mongoose model
const User = mongoose.model("User", userSchema);

// Create a new user
app.post("/api", async (req, res) => {
  if (!req.body) {
    res.status(400).json({ message: "Cannot create new user without details" });
    return;
  }
  try {
    const user = new User(req.body);

    await user.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).send("Internal Server Error");
  }
});

// Retrieve all users
app.get("/api", async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    console.error("Error retrieving users:", err);
    res.status(500).send("Internal Server Error");
  }
});

// Retrieve a user by ID
app.get("/api/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findById(userId);
    if (!user) {
      res.status(404).send("User not found");
    } else {
      res.json(user);
    }
  } catch (err) {
    console.error("Error retrieving user:", err);
    res.status(500).send("Internal Server Error");
  }
});

// Update a user by ID
app.put("/api/:id", async (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;
  try {
    const user = await User.findByIdAndUpdate(userId, updatedUser, {
      new: true,
    });
    if (!user) {
      res.status(404).send("User not found");
    } else {
      res.json({ message: "User updated successfully!" });
    }
  } catch (err) {
    console.error("Error updating user:", err);
    res.status(500).send("Internal Server Error");
  }
});

// Delete a user by ID
app.delete("/api/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findByIdAndRemove(userId);
    if (!user) {
      res.status(404).send("User not found");
    } else {
      res.json({ message: "User deleted successfully!" });
    }
  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(500).send("Internal Server Error");
  }
});
