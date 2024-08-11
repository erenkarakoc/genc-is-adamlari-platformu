const knex = require("../knex")

const getAllUsers = async (req, res) => {
  try {
    const { page = 1, items_per_page = 10, search = "" } = req.query
    const limit = parseInt(items_per_page, 10)
    const offset = (parseInt(page, 10) - 1) * limit

    // Search condition
    const searchCondition = search
      ? knex.raw("LOWER(name) LIKE ?", [`%${search.toLowerCase()}%`])
      : true

    const [total] = await knex("users")
      .count("* as count")
      .where(searchCondition)
    const users = await knex("users")
      .select("*")
      .where(searchCondition)
      .limit(limit)
      .offset(offset)

    const totalPages = Math.ceil(total.count / limit)

    const pagination = {
      page: parseInt(page, 10),
      items_per_page: limit,
      total_items: total.count,
      total_pages: totalPages,
      links: Array.from({ length: totalPages }, (_, i) => ({
        label: `${i + 1}`,
        active: i + 1 === parseInt(page, 10),
        url: `/?page=${i + 1}&items_per_page=${limit}&search=${search}`,
        page: i + 1,
      })),
    }

    res.json({ data: users, payload: { pagination } })
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
