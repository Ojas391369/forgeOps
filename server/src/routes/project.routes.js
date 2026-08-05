const express = require("express");

const router = express.Router();

const verifyToken = require("../middlewares/auth.middleware");

const {
    create,
} = require("../controllers/project.controller");

router.post("/", verifyToken, create);

module.exports = router;