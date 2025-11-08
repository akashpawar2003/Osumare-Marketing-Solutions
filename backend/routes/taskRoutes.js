import express from "express";
import { addTask, allTask,getTask,updateTask,deleteTask } from "../controllers/taskController.js";
const taskRouter = express.Router();



taskRouter.get("/",allTask);
taskRouter.get("/:id",getTask);
taskRouter.post("/add",addTask);
taskRouter.put("/update/:id",updateTask)
taskRouter.delete("/:id",deleteTask)

export default taskRouter