const { Router } = require("express");
const router = Router();
const getUserController = require("../controllers/getUserController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, getUserController);

module.exports = router;
