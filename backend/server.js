const express = require("express");
const colors= require('colors')
const dotenv =require("dotenv")
dotenv.config()
const connectDB= require('./config/db')
const userRouter=require('./routes/user/userRouter')
const trainerRouter = require('./routes/trainer/trainerRouter')
const adminRouter =require("./routes/admin/adminRouter")
const {errorHandler}=require('./middleware/errorMiddelware')
const port =process.env.PORT||5000
connectDB();
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))


// Route-handling
app.use('/api/user',userRouter)
app.use('/api/trainer',trainerRouter)
app.use('/api/admin',adminRouter)


// Error-handling
app.use(errorHandler)


app.listen(port,()=>console.log(`server started on port ${port}`))

