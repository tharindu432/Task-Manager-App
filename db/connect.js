const mongoose=require('mongoose');


const connectionString=
'mongodb+srv://tharinduchaturanga432:VkMAguLkb1lr0S9q@cluster0.vol8fmg.mongodb.net/?retryWrites=true&w=majority';

const connectDB=(url)=>{
return mongoose.connect(connectionString);

}

module.exports=connectDB;


