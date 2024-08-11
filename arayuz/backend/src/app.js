const express = require("express")
const cors = require("cors")
const userRoutes = require("./routes/index")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api", userRoutes)

app.get("/", (req, res) => {
  res.send("Genç İş Adamları Platformu Veritabanı")
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
