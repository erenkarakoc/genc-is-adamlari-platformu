const express = require("express")
const router = express.Router()
const {
  getUsers,
  createUser,
  removeUser,
  removeAllUsers,
} = require("../controllers/userController")

router.get("/users", getUsers)
router.post("/users", createUser)
router.delete("/users/:id", removeUser)
router.post("/users/removeAllUsers", removeAllUsers)

module.exports = router
