const express = require("express")
const cors = require("cors")
const fs = require("fs")
const https = require("https")
const userRoutes = require("./routes/index")

const app = express()

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://arayuz.gencisadamlariplatformu.com",
    ],
    methods: ["GET", "POST", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
)

app.use(express.json())
app.use("/api", userRoutes)

app.get("/", (req, res) => {
  res.send("Genç İş Adamları Platformu Veritabanı")
})

const options = {
  key: fs.readFileSync(
    "/etc/letsencrypt/live/arayuz.gencisadamlariplatformu.com/privkey.pem"
  ),
  cert: fs.readFileSync(
    "/etc/letsencrypt/live/arayuz.gencisadamlariplatformu.com/fullchain.pem"
  ),
}

const PORT = process.env.PORT
https.createServer(options, app).listen(PORT, () => {
  console.log(`HTTPS Server is running on port ${PORT}`)
})
