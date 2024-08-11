const knex = require("../knex") // Adjust the path if necessary

const getAllUsers = async (req, res) => {
  try {
    const users = await knex("users").select("*")
    res.json(users)
  } catch (err) {
    console.error("Error fetching users:", err)
    res.status(500).json({ error: "Failed to fetch users" })
  }
}

const createUser = async (req, res) => {
  const { username, email, password } = req.body
  try {
    const [userId] = await knex("users").insert({ username, email, password })
    console.log(knex)
    res.status(201).json({ id: userId, username, email })
  } catch (err) {
    console.error("Error creating user:", err)
    res.status(500).json({ error: "Failed to create user" })
  }
}

const removeUser = async (req, res) => {
  const { id } = req.params
  try {
    const result = await knex("users").where("id", id).del()
    if (result === 0) {
      res.status(404).json({ error: "User not found" })
      return
    }
    res
      .status(200)
      .json({ message: "User removed successfully", affectedRows: result })
  } catch (err) {
    console.error("Error removing user:", err)
    res.status(500).json({ error: "Failed to remove user" })
  }
}

const removeAllUsers = async (req, res) => {
  try {
    const result = await knex("users").del()
    res
      .status(200)
      .json({ message: "All users removed successfully", affectedRows: result })
  } catch (err) {
    console.error("Error removing users:", err.message)
    res
      .status(500)
      .json({ error: "Failed to remove users", details: err.message })
  }
}

module.exports = { getAllUsers, createUser, removeUser, removeAllUsers }
