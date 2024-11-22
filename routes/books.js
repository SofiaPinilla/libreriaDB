const express = require("express")
const BookController = require("../controllers/BookController")
const router = express.Router()

router.post("/create",BookController.create)
router.get("/getAll",BookController.getAll)
router.delete("/id/:id",BookController.delete)
router.put("/id/:id",BookController.update)

module.exports = router