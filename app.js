const express = require("express")
const cors = require("cors")
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
require("./config/db")
const router = require("./routes/user.route")

app.use("/api/users", router)


app.get("/", (req, res, next) => {
    res.sendFile(__dirname + "/./views/index.html")
})

app.use((req, res, next) => {
    res.status(404).send("not found")
})

module.exports = app
