import { body } from "express-validator";

export const registerValidation = [

  body("username")
    .trim()
    .notEmpty()
    .withMessage("Username is required"),

  body("email")
    .isEmail()
    .withMessage("Enter a valid email"),

  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
];

export const loginValidation = [

  body("email")
    .isEmail(),

  body("password")
    .notEmpty(),

];