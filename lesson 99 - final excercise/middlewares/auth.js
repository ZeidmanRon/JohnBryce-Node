const auth = (req, res, next) => {
    const bearerToken = req.headers.authorization;
    if (bearerToken === 'Bearer 123') {
      next();
    } else {
      res.sendStatus(401);
    }
  };
module.exports = auth;