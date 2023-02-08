const cors = require("cors")
const express = require("express")

const app = express()

const usersRoute = require("./routes/user")
const formationsRoute = require("./routes/formation")
const themesRoute = require("./routes/theme")
const filesRoute = require("./routes/file")

app.use(express.json())

app.use(cors({ origin: "http://127.0.0.1:3000", credentials: true }))

// display files from uploads folder
app.use("/uploads", express.static("uploads"))

//utiliser le router nodejs
app.use("/users", usersRoute)
app.use("/formations", formationsRoute)
app.use("/themes", themesRoute)
app.use("/files", filesRoute)

app.listen(5000, () => {
  console.log("server running on port 5000")
})

module.exports = app
