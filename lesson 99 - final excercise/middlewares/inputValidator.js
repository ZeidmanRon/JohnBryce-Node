const Joi = require("joi");

// Define the validation schema
const symbolScehma = Joi.string().required().length(3).alphanum().uppercase();

// Joi middleware function
const inputValidator = (req, res, next) => {
  Object.values(req.body).forEach((symbol) => {
    console.log(symbolScehma.validate(symbol));
    validationResult = symbolScehma.validate(symbol);
    if (validationResult.error) {
      const errorMessage = `${validationResult.error.details[0].message}: value is: ${validationResult.value}`;
      return res.status(400).json({ error: errorMessage });
    }
  });
  next();
};

module.exports = inputValidator;
