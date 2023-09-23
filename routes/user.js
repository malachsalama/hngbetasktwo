const express = require("express");
const {
  validateUser,
  validateId,
  handleValidationErrors,
} = require("../middleware/validator");

const {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../controllers/UserController");

const router = express.Router();

router.post("/", validateUser, handleValidationErrors, createUser);
router.get("/", getAllUsers);
router.get("/:id", validateId, handleValidationErrors, getUserById);
router.put("/:id", validateId, handleValidationErrors, updateUserById);
router.delete("/:id", validateId, handleValidationErrors, deleteUserById);

module.exports = router;
