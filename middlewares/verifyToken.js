const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (!authHeader) {
    return res.status(401).json({ message: "You are not authorized" });
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "INVALID TOKEN" });
    req.user = user;
    next();
  });
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(
    (req,
    res,
    () => {
      if (req.user.id === req.params.id || req.user.isAdmin) {
        next();
      } else return res.status(401).json({ message: "you are not authorized" });
    })
  );
};

const verifyIsAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (!req.user.isAdmin) return res.status(403).json("You are not admin");
    next();
  });
};

module.exports = { verifyToken, verifyTokenAndAuthorization, verifyIsAdmin };
