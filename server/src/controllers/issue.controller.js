const {
    createIssue,
    getIssues,
    getIssueById,
    updateIssue,
    deleteIssue,
} = require("../services/issue.service");

const create = async (req, res) => {
    try {

        const {
            title,
            description,
            priority,
            projectId,
        } = req.body;

        const issue = await createIssue(
            {
                title,
                description,
                priority,
                projectId,
                reporterId: req.user.userId,
            },
            req.user.userId
        );

        res.status(201).json({
            success: true,
            message: "Issue created successfully.",
            data: issue,
        });

    } catch (error) {

        res.status(400).json({
            success: false,
            message: error.message,
        });

    }
};

const getAll = async (req, res) => {

    const issues = await getIssues(req.user.userId);

    res.json({
        success: true,
        data: issues,
    });

};

const getOne = async (req, res) => {

    try {

        const issue = await getIssueById(
            req.params.id,
            req.user.userId
        );

        res.json({
            success: true,
            data: issue,
        });

    } catch (error) {

        res.status(404).json({
            success: false,
            message: error.message,
        });

    }

};

const update = async (req, res) => {

    try {

        const issue = await updateIssue(
            req.params.id,
            req.user.userId,
            req.body
        );

        res.json({
            success: true,
            message: "Issue updated successfully.",
            data: issue,
        });

    } catch (error) {

        res.status(404).json({
            success: false,
            message: error.message,
        });

    }

};

const remove = async (req, res) => {

    try {

        await deleteIssue(
            req.params.id,
            req.user.userId
        );

        res.json({
            success: true,
            message: "Issue deleted successfully.",
        });

    } catch (error) {

        res.status(404).json({
            success: false,
            message: error.message,
        });

    }

};

module.exports = {
    create,
    getAll,
    getOne,
    update,
    remove,
};