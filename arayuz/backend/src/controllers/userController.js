const mysql = require("mysql2")

const connection = mysql.createConnection({
  host: "162.0.214.98",
  user: "remote_user",
  password: "S!DGKIm(z6YHg^)K",
  database: "gencisdb",
})

connection.connect((err) => {
  if (err) throw err
  console.log("Connected to the remote MySQL database!")
})

const getUsers = (req, res) => {
  connection.query("SELECT * FROM users", (err, results) => {
    if (err) throw err
    res.json(results)
  })
}

const createUser = (req, res) => {
  const { username, email, password } = req.body
  const query = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)"
  connection.query(query, [username, email, password], (err, results) => {
    if (err) throw err
    res.status(201).json({ id: results.insertId, username, email })
  })
}

const removeAllUsers = (req, res) => {
  const query = "DELETE FROM users"
  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error removing users:", err)
      res.status(500).json({ error: "Failed to remove users" })
      return
    }
    res
      .status(200)
      .json({
        message: "All users removed successfully",
        affectedRows: results.affectedRows,
      })
  })
}

module.exports = { getUsers, createUser, removeAllUsers }
