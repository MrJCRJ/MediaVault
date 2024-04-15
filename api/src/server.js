const express = require("express")
const routes = require("./routes")

const app = express()
app.use(express.json())
app.use(routes)

const port = 4444
app.listen(port, () => console.log(`Server is running on Port ${port}`))