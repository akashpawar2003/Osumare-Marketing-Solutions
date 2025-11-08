import express from "express";
import { tasksArray } from "../app.js";

//Retrieve a list of all tasks
export const allTask = (req,res) => {
  try {
    if(!tasksArray){
      res.status(404).json({success: false,message: 'Tasks not found'})
    }
    res.status(200).json({
            success: true,
            message: 'Retrieve All Task Succesfully',
            tasksArray
        })
  } catch (error) {
    res.status(400).json({success: false,message:error.message})
  }
};

// Retrieve a specific task by ID.
export const getTask = (req,res) => {
  try {
    const id = req.params.id;
    if(!id){
      return res.status(404).json({success: false,message: 'Required task Id'})
    }
    const task = tasksArray.find(task => task.id == id);
    if(!task){
      return res.status(404).json({success: false,message: 'This Task not found'})
    }
    res.status(200).json({
            success: true,
            message: 'Retrieve Task Succesfully',
            task
        })
  } catch (error) {
    res.status(400).json({success: false,message:error.message})
  }
};

// Create a new task.
export const addTask = (req,res) => {
  try {
    const data = req.body;
    if(!data){
      res.status(404).json({success: false,message: 'Task are Required'})
    }
    tasksArray.push({ id: tasksArray.length + 1, title:data.title, descriptions:data.descriptions });
    res.status(200).json({
            success: true,
            message: 'Task Add SuccesFully',
            tasksArray
        })
  } catch (error) {
    res.status(400).json({
            success: false,
            message: error.message
        })
  }
}

//Update an existing task by ID.
export const updateTask = (req,res) => {
  try {
    const task = tasksArray.find(task => task.id == req.params.id);
    if (!task) return res.status(404).json({ message: "task not found" });

    task.title = req.body.title;
    task.descriptions = req.body.descriptions;
    res.json(task);
  } catch (error) {
    res.status(400).json({
            success: false,
            message: error.message
    })
  }
}

//Delete a task by ID. 
export const deleteTask = (req,res) => {
  try {
    const id = req.params.id
    if(!id){
      return res.status(404).json({success: false,message: 'This Task not found'})
    }
    const deleteFromArray = tasksArray.filter(task => id !== task.id)
    res.status(200).json({
            success: true,
            message: 'Task deleted successfully'
        });
  } catch (error) {
    res.status(400).json({
            success: false,
            message: error.message
    })
  }
}
