const express = require("express")
const router = express.Router()
const {
  getAllUsers,
  createUser,
  removeUser,
  removeAllUsers,
} = require("../controllers/userController")

router.get("/users", getAllUsers)
router.post("/users", createUser)
router.delete("/users/:id", removeUser)
router.post("/users/removeAllUsers", removeAllUsers)

module.exports = router
