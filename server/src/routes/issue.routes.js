const express = require("express");

const router = express.Router();

const verifyToken = require("../middlewares/auth.middleware");

const {
    create,
    getAll,
    getOne,
    update,
    remove,
} = require("../controllers/issue.controller");

router.post("/", verifyToken, create);

router.get("/", verifyToken, getAll);

router.get("/:id", verifyToken, getOne);

router.patch("/:id", verifyToken, update);

router.delete("/:id", verifyToken, remove);

module.exports = router;