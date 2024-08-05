import express from "express"
import mysql from "mysql2/promise"
import routes from "./routes"

const app = express()
const port = 3001

app.use(express.json())
app.use("/api", routes)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
