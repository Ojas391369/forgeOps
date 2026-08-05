const express = require("express");

const router = express.Router();

const verifyToken = require("../middlewares/auth.middleware");

const {
    create,
    getAll,
    getOne,
} = require("../controllers/project.controller");

router.post("/", verifyToken, create);
router.get("/", verifyToken, getAll);
router.get("/:id", verifyToken, getOne);

module.exports = router;