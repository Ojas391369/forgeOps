const prisma = require("../config/prisma");

const createProject = async (projectData) => {

    const project = await prisma.project.create({
        data: projectData,
    });

    return project;
};

module.exports = {
    createProject,
};