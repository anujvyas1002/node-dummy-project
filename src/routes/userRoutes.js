const express = require("express");
const { body } = require("express-validator");
const validateRequest = require("../middlewares/validateRequest");
const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();
// CRUD routes but protected
router.post(
	"/",
	[
		body("name").notEmpty().withMessage("Name is required"),
		body("email").isEmail().withMessage("Valid email is required"),
		body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 chars"),
		body("phone").optional().isMobilePhone().withMessage("Phone must be valid"),
	],
	authMiddleware,
	validateRequest,
	createUser
);
router.get("/", authMiddleware, getUsers);
router.get("/:id", authMiddleware, getUserById);
router.put("/:id", authMiddleware, updateUser);
router.delete("/:id", authMiddleware, deleteUser);

module.exports = router;
