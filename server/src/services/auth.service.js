const prisma = require("../config/prisma");
const bcrypt = require("bcrypt");
const validator = require("validator");

const createUser = async (userData) => {

    const { name, email, password } = userData;

    // Validate Email
    if (!validator.isEmail(email)) {
        throw new Error("Invalid email format.");
    }

    // Check duplicate email
    const existingUser = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    if (existingUser) {
        throw new Error("Email already registered.");
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create User
    const user = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        },
    });

    return user;
};

module.exports = {
    createUser,
};