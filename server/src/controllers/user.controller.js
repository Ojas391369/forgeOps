const getCurrentUser = async (req, res) => {

    return res.status(200).json({
        success: true,
        message: "Current user fetched successfully.",
        data: req.user,
    });

};

module.exports = {
    getCurrentUser,
};