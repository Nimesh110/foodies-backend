import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  try {
    // Allow both 'token' header or standard 'Authorization: Bearer <token>'
    let token = req.headers.token;

    if (!token && req.headers.authorization) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.json({ success: false, message: "Not Authorized, Login Again" });
    }

    const token_decode = jwt.verify(token, process.env.JWT_SECRET);

    // ✅ Ensure req.body exists before assigning
    if (!req.body) req.body = {};

    req.body.userId = token_decode.id;

    next();
  } catch (error) {
    console.log("Auth error:", error);
    res.json({ success: false, message: "Invalid or Expired Token" });
  }
};

export default authMiddleware;
