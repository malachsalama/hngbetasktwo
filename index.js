const mongoose = require("mongoose");
const express = require("express");
const UserController = require("./controllers/UserController");

const app = express();
require("dotenv").config();

const port = process.env.PORT || 3000;

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

// Routes
app.post("/api", UserController.createUser);
app.get("/api", UserController.getAllUsers);
app.get("/api/:id", UserController.getUserById);
app.put("/api/:id", UserController.updateUserById);
app.delete("/api/:id", UserController.deleteUserById);
