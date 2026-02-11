import { body } from "express-validator";

const userRegistrationValidator = () => {
  return [
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Email is invalid"),
    body("username")
      .trim()
      .notEmpty()
      .withMessage("username is required")
      .isLength({ min: 3 })
      .withMessage("username should be atleast 3 character")
      .isLength({ max: 14 })
      .withMessage("username cannot exceed 13 character"),
    body("password")
      .isString()
      .notEmpty()
      .withMessage("Password is required")
      .isStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
      .withMessage(
        "Password must be at least 8 characters long and include uppercase, lowercase, numbers, and symbols.",
      )
      .custom((value, { req }) => {
        if (value.toLowerCase().includes(req.body.username?.toLowerCase())) {
          throw new Error("Password cannot contain your username");
        }
        return true;
      })
      .trim(),
  ];
};

const userLoginValidator = () => {
  return [
    body("email").isEmail().withMessage("Email is not valid"),
    body("password".notEmpty().withMessage("Password cannot be empty")),
  ];
};

export { userRegistrationValidator, userLoginValidator };
