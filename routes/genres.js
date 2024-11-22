const express = require("express")
const GenreController = require("../controllers/GenreController")
const router = express.Router()

router.post("/create",GenreController.create)

module.exports = router