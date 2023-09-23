const { body, param, validationResult } = require("express-validator");

// Validation functions
const validateUser = body("name")
  .notEmpty()
  .isString()
  .escape()
  .withMessage("Name must be a valid string");

const validateId = param("id")
  .notEmpty()
  .isMongoId() // Ensure it's a valid MongoDB ObjectId
  .withMessage("Id must be a valid MongoDB ObjectId");

const formatValidationErrors = (errors) => {
  return errors.map((error) => {
    return {
      field: error.param,
      message: error.msg,
    };
  });
};

// Error handling middleware
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const formattedErrors = formatValidationErrors(errors.array());
    return res.status(400).json({ errors: formattedErrors });
  }

  next();
};

module.exports = {
  validateUser,
  validateId,
  handleValidationErrors,
};
