const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    // Check if authorization header is present
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      return res.status(401).send({
        success: false,
        message: "Authorization header is missing",
      });
    }

    // Get token from authorization header
    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).send({
        success: false,
        message: "Token is missing",
      });
    }

    // Verify token
    JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(401).send({
          success: false,
          message: "Unauthorized User",
        });
      } else {
        req.body.id = decode.id;
        next();
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Please provide Auth Token",
      error,
    });
  }
};