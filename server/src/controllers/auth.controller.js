const { createUser } = require("../services/auth.service");

const register = async (req, res) => {
    try {
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
                message: "Password must be at least 8 characters."
            });
        }

        const user = await createUser({
            name,
            email,
            password,
        });

        const { password: _, ...userWithoutPassword } = user;

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: userWithoutPassword,
        });

    } catch (error) {

        return res.status(400).json({
            success: false,
            message: error.message,
        });

    }
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