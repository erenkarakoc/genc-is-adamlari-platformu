const express = require("express")
const router = express.Router()
const {
  getUsers,
  createUser,
  removeAllUsers,
} = require("../controllers/userController")

router.get("/users", getUsers)
router.post("/users", createUser)
router.delete("/users", removeAllUsers)

module.exports = router
