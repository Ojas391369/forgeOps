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

const getProjectById = async (projectId, ownerId) => {

    const project = await prisma.project.findFirst({
        where: {
            id: projectId,
            ownerId,
        },
    });

    if (!project) {
        throw new Error("Project not found.");
    }

    return project;
};

module.exports = {
    createProject,
    getProjects,
    getProjectById,
};