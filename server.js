const tasks= require('./routes/tasks')
const express= require('express');
const app=express();


//middleware
app.use(express.json());



//routes
app.get('./hello',(req,res)=>{
    res.send('Task Manager App')
})

app.use('/api/v1/tasks',tasks)









const PORT=process.env.PORT || 3001;

app.listen(PORT,console.log(`server is listening on port ${PORT}...`))
