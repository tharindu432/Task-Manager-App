const Task= require('../models/task')

const getAllTasks=(req,res)=>{
  //  const getAll= await Task.get
    res.json(req.body)
}

const createTask=async(req,res)=>{
    const task=await Task.create(req.body)
    res.status(201).json({task})
}
const getTask=(req,res)=>{
    res.send("get a single task")
}
const updateTask=(req,res)=>{
    res.send("update a task")
}
const deleteTask=(req,res)=>{
    res.send("delete a task")
}


module.exports={
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}