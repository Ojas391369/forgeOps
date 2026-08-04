const healthCheck = (req, res) => {
    res.status(200).json({
        success: true,
        message: "ForgeOps Backend Running 🚀",
        timestamp: new Date().toISOString()
    });
};

module.exports = {
    healthCheck,
};