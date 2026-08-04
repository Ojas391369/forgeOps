const register = (req, res) => {

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({
            success: false,
            message: "All fields are required."
        });
    }

    if (password.length < 8) {
        return res.status(400).json({
            success: false,
            message: "Password must be at least 8 characters long."
        });
    }

    res.status(201).json({
        success: true,
        message: "User data received successfully",
        data: {
            name,
            email,
            password
        }
    });

};

const login = (req, res) => {

    const { email, password } = req.body;

    res.status(200).json({
        success: true,
        message: "Login data received successfully",
        data: {
            email,
            password
        }
    });

};

module.exports = {
    register,
    login,
};