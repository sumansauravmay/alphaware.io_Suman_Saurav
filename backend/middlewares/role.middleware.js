const roleAuth = (requiredRole) => {
    return (req, res, next) => {
      const userRole = req.role; // Assuming req.user contains the authenticated user object
      console.log(userRole);
      if (userRole !== requiredRole) {
        return res.status(401).json({ message: "Access denied. Insufficient permissions." });
      }
  
      next(); // Proceed if the user has the required role
    };
  };
  
  module.exports = {roleAuth};