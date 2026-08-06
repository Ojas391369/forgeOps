const prisma = require("../config/prisma");

const createIssue = async (issueData, userId) => {

    const project = await prisma.project.findFirst({
        where: {
            id: issueData.projectId,
            ownerId: userId,
        },
    });

    if (!project) {
        throw new Error("Project not found.");
    }

    return await prisma.issue.create({
        data: issueData,
    });
};

const getIssues = async (userId) => {

    return await prisma.issue.findMany({
        where: {
            reporterId: userId,
        },
        orderBy: {
            createdAt: "desc",
        },
    });

};

const getIssueById = async (issueId, userId) => {

    const issue = await prisma.issue.findFirst({
        where: {
            id: issueId,
            reporterId: userId,
        },
    });

    if (!issue) {
        throw new Error("Issue not found.");
    }

    return issue;

};

const updateIssue = async (issueId, userId, issueData) => {

    const updated = await prisma.issue.updateMany({
        where: {
            id: issueId,
            reporterId: userId,
        },
        data: issueData,
    });

    if (updated.count === 0) {
        throw new Error("Issue not found.");
    }

    return await prisma.issue.findUnique({
        where: {
            id: issueId,
        },
    });

};

const deleteIssue = async (issueId, userId) => {

    const deleted = await prisma.issue.deleteMany({
        where: {
            id: issueId,
            reporterId: userId,
        },
    });

    if (deleted.count === 0) {
        throw new Error("Issue not found.");
    }

};

module.exports = {
    createIssue,
    getIssues,
    getIssueById,
    updateIssue,
    deleteIssue,
};