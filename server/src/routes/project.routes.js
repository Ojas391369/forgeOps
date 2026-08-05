const express = require("express");

const router = express.Router();

const verifyToken = require("../middlewares/auth.middleware");

const {
    create,
    getAll,
} = require("../controllers/project.controller");

router.post("/", verifyToken, create);
router.get("/", verifyToken, getAll);

module.exports = router;