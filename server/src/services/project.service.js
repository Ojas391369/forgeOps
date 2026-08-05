const prisma = require("../config/prisma");

const createProject = async (projectData) => {

    const project = await prisma.project.create({
        data: projectData,
    });

    return project;
};

const getProjects = async (ownerId) => {

    const projects = await prisma.project.findMany({
        where: {
            ownerId,
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    return projects;
};

module.exports = {
    createProject,
    getProjects,
};