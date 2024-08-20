const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const token = req.headers["authorization"].split(" ")[1];

  console.log("token", token);
  if (!token) {
    return res
      .status(403)
      .send({ message: "No token provided!, Please Login first" });
  }

  jwt.verify(token, "your_secret_key", (err, decoded) => {
    if (err) {
      return res
        .status(401)
        .send({ message: "You are not authorized!, please login first!" });
    }
    // console.log("decoded", decoded);
    const userID = decoded.id;
    useremail = decoded.email;
    req.body.userID = userID;
    // console.log("userID", userID);
    next();
  });
};

module.exports = { authenticate };
