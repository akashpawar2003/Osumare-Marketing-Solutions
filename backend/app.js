import express from "express";
import taskRouter from "./routes/taskRoutes.js";
const app = express();
app.use(express.json());
const PORT = 3000

export let tasksArray = [
  { id: 1, title: "Home", descriptions: "I have to clean Home " },
  { id: 2, title: "Office", descriptions: "I Have completing project" },
]; 

app.use("/tasks",taskRouter)
console.log(tasksArray);

app.listen(PORT,()=>{
  console.log(`Server is Listening http://localhost:${PORT}`)
})



