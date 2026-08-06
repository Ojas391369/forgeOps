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

const updateProject = async (projectId, ownerId, projectData) => {

    const project = await prisma.project.updateMany({
        where: {
            id: projectId,
            ownerId,
        },
        data: projectData,
    });

    if (project.count === 0) {
        throw new Error("Project not found.");
    }

    return await prisma.project.findUnique({
        where: {
            id: projectId,
        },
    });

};

const deleteProject = async (projectId, ownerId) => {

    const project = await prisma.project.deleteMany({
        where: {
            id: projectId,
            ownerId,
        },
    });

    if (project.count === 0) {
        throw new Error("Project not found.");
    }
};

module.exports = {
    createProject,
    getProjects,
    getProjectById,
    updateProject,
    deleteProject,
};
