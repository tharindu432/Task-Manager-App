const Task= require('../models/task')

const getAllTasks=async(req,res)=>{
    try{
        const getAll= await Task.find({});
        res.status(201).json({getAll,amount:getAll.length})
        // res.json(req.body)
    }catch(err){
        res.status(404).json({msg:err})
    }
  
}

const createTask=async(req,res)=>{
    try{
        const task=await Task.create(req.body)
        res.status(201).json({task})
    }catch(err){
   res.status(500).json({msg:err})
    }
   
}
const getTask=async(req,res)=>{
    try{
        
        const get= await Task.findOne({_id:req.params.id});
        res.status(201).json({get})
        // res.json(req.body)
    }catch(err){
        res.status(404).json({msg:err})
    }
}
const updateTask=async(req,res)=>{
    try{
        
        const updateeone= await Task.findOneAndUpdate({_id:req.params.id},req.body,{
            new:true,
            runValidators:true
        });
        res.status(201).json({updateeone})
        // res.json(req.body)
    }catch(err){
        res.status(404).json({msg:err})
    }
}
const deleteTask=async(req,res)=>{
    try{
        
        const deleteone= await Task.findOneAndDelete({_id:req.params.id});
        res.status(201).json({deleteone})
        // res.json(req.body)
    }catch(err){
        res.status(404).json({msg:err})
    }
}


module.exports={
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}