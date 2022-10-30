const app = require("./app");
const dotenv = require("dotenv");
const connectDataBase = require("./config/database")


//Config
dotenv.config({path:"backend/config/config.env"})

//Connecting to database
connectDataBase()



app.listen(process.env.PORT, ()=>{
    
    console.log(`Server is running in http://localhost:${process.env.PORT}`);
})
