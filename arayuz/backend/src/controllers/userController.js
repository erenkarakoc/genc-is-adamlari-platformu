const knex = require("../knex")

const getAllUsers = async (req, res) => {
  try {
    const { page = 1, items_per_page = 10, search = "" } = req.query
    const offset = (page - 1) * items_per_page

    // Use search query to filter users
    const [users, total] = await Promise.all([
      knex("users")
        .select("*")
        .where(function () {
          if (search) {
            this.where("name", "like", `%${search}%`).orWhere(
              "email",
              "like",
              `%${search}%`
            )
          }
        })
        .limit(items_per_page)
        .offset(offset),
      knex("users")
        .count("id as count")
        .where(function () {
          if (search) {
            this.where("name", "like", `%${search}%`).orWhere(
              "email",
              "like",
              `%${search}%`
            )
          }
        }),
    ])

    const pagination = {
      page: parseInt(page, 10),
      items_per_page,
      total: total[0].count,
      last_page: Math.ceil(total[0].count / items_per_page),
      next_page_url:
        total[0].count > offset + items_per_page
          ? `/?page=${
              parseInt(page, 10) + 1
            }&items_per_page=${items_per_page}&search=${search}`
          : null,
      prev_page_url:
        page > 1
          ? `/?page=${
              parseInt(page, 10) - 1
            }&items_per_page=${items_per_page}&search=${search}`
          : null,
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
