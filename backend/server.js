const express = require("express")
const app = express()

const server = require("http").createServer(app)
const { Server } = require("socket.io")

const io = new Server(server)

app.get("/", (req, res) => {
  res.send("This is mern realtime board sharing app official server by Abhinav")
})

io.on("connection", (Socket) => {
  console.log("user connected")
})

const PORT = process.env.PORT || 5000
server.listen(PORT, () =>
  console.log(`server is listening on http://localhost:${PORT}`)
)
