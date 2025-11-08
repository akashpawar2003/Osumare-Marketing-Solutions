# CRUD OPERATION
## I have build crud Operation without using any database as per company assignment
### 1.//Retrieve a list of all tasks
```
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
```
![alt text](get.png)
---
