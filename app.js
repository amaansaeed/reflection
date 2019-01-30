//  Dependencies
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const helmet = require("helmet")
const path = require("path")
require("dotenv").config()

// //  Initialize Smart Home
// require("./gpio/intitalize")

//  Routes
const routes = require("./routes/routes")

//  Express
const app = express()

//  Port & Listener
app.set("port", process.env.PORT)

app.listen(app.get("port"), () =>
  console.log(`'Reflection' server listening on port: ${app.get("port")}`)
)

//  Middleware
app.use(express.json()) // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: true })) // to support URL-encoded bodies
app.use(morgan("tiny")) // request logger
app.use(helmet()) //  third-party middleware
app.use(cors())

//  API Routing
app.use("/api/v1", routes)

// Serve the static files from the React app
// app.use("/static", express.static(path.join(__dirname, "./client/build/static")))
// app.get("*", function(req, res) {
//   res.sendFile("index.html", { root: path.join(__dirname, "./client/build/") })
// })

//  DEVELOPMENT
// require("./models/seed.js")
// require("./services/google")
