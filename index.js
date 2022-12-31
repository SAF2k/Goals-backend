const e = require("express")
const express = require("express")
const { errorHandler } = require("./middleware/errorMiddleware")
const router = require("./routes/goalRoutes")
const dotenv = require("dotenv").config()

const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', router)

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server is running in the server ${PORT}`)
})