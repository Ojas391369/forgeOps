const {
    createProject,
    getProjects,
} = require("../services/project.service");

const create = async (req, res) => {

    try {

        const { name, description } = req.body;

        if (!name) {
            return res.status(400).json({
                success: false,
                message: "Project name is required.",
            });
        }

        const project = await createProject({
            name,
            description,
            ownerId: req.user.userId,
        });

        return res.status(201).json({
            success: true,
            message: "Project created successfully.",
            data: project,
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message,
        });

    }

};

const getAll = async (req, res) => {

    try {

        const projects = await getProjects(req.user.userId);

        return res.status(200).json({
            success: true,
            message: "Projects fetched successfully.",
            data: projects,
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message,
        });

    }

};

module.exports = {
    create,
    getAll,
};