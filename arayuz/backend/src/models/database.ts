import mysql from "mysql2/promise"

const pool = mysql.createPool({
  host: "localhost",
  user: "gencisdbuser",
  password: "S!DGKIm(z6YHg^)K",
  database: "gencisdb",
})

export default pool
