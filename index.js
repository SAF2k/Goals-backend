const express = require("express")
const { errorHandler } = require("./middleware/errorMiddleware")
const router = require("./routes/goalRoutes")
const dotenv = require("dotenv").config()
const colors = require("colors")
const { connectDB } = require("./config/db")

const PORT = process.env.PORT || 5000

const app = express()
connectDB()


app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', router)

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server is running in the server ${PORT}`.bgYellow.underline)
})
