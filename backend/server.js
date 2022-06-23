const express = require("express");
const colors= require('colors')
const dotenv =require("dotenv")
dotenv.config()
const connectDB= require('./config/db')
const userRouter=require('./routes/user/userRouter')
const {errorHandler}=require('./middleware/errorMiddelware')
const port =process.env.PORT||5000
connectDB();
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))


// Route-handling
app.use('/api/user',userRouter)


// Error-handling
app.use(errorHandler)


app.listen(port,()=>console.log(`server started on port ${port}`))

