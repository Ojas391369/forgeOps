const prisma = require("../config/prisma");

const createUser = async (userData) => {

    const user = await prisma.user.create({
        data: userData,
    });

    return user;
};

module.exports = {
    createUser,
};