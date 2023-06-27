const express = require("express");
const router = express.Router();
const validateSymbol = require("../middlewares/inputValidator.js");

const welcome = (req, res) => {
  res.send("welcome page works");
};

const dashboard = (req, res) => {
  res.send("dashboard page works");
};

const logout = (req, res) => {
  res.send("logout page works");
};

const symbol = (req, res) => {
  if (!res.headersSent) {
    if (req.body) {
      const values = Object.values(req.body);
      let response = "added symbols: [";

      values.forEach((value) => {
        response += `${value}, `;
      });

      res.send(`${response.slice(0, response.length - 2)}]`);
    } else {
      res.send("no symbols");
    }
  }
};

// Import the Joi middleware
const inputValidator = require("../middlewares/inputValidator.js");

router.get("/", welcome);
router.get("/dashboard", dashboard);
router.get("/logout", logout);

// Apply the inputValidator middleware to the "/symbol" route
router.post(
  "/symbol",
  express.urlencoded({ extended: false }),
  inputValidator,
  symbol
);

module.exports = router;
