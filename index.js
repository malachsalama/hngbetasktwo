const mongoose = require("mongoose");
const express = require("express");
const UserController = require("./controllers/UserController");
const {
  validateUser,
  validateId,
  handleValidationErrors,
} = require("./middleware/validator");

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
app.post(
  "/api",
  validateUser,
  handleValidationErrors,
  UserController.createUser
);
app.get("/api", UserController.getAllUsers);
app.get(
  "/api/:id",
  validateId,
  handleValidationErrors,
  UserController.getUserById
);
app.put(
  "/api/:id",
  validateId,
  handleValidationErrors,
  UserController.updateUserById
);
app.delete(
  "/api/:id",
  validateId,
  handleValidationErrors,
  UserController.deleteUserById
);
