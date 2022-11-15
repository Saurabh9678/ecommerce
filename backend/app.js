const express = require("express");
const errorMiddleware = require("./middleware/error")
const cookieParser = require("cookie-parser")


const app = express();
app.use(express.json())
app.use(cookieParser())


//Route Imports
const productRoutes = require("./routes/productRoute");
const userRoutes = require("./routes/userRoute");



app.use("/api/v1", productRoutes);
app.use("/api/v1", userRoutes)

// MiddleWare for Error

app.use(errorMiddleware)

module.exports = app