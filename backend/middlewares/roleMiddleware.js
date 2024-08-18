const roleMiddleware = (roles) => {
    return (req, res, next) => {
        const user = req.user; // User should be added to req by JWT middleware
        if (!roles.includes(user.role)) {
            return res.status(403).json({ message: 'Access denied' });
        }
        next();
    };
};

module.exports = roleMiddleware;