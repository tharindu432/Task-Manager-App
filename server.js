const tasks= require('./routes/tasks')
const express= require('express');
const connectDB= require('./db/connect')
require('dotenv').config();
const app=express();


//middleware
app.use(express.json());



//routes
app.get('./hello',(req,res)=>{
    res.send('Task Manager App')
})

app.use('/api/v1/tasks',tasks)









const PORT=process.env.PORT || 3001;

const start=async()=>{
    try{
        await (await connectDB(process.env.MONGO_URI))
        app.listen(PORT,console.log(`server is listening on port ${PORT}...`))


    }catch(err){
        console.error(err);
    }
}

start();

