const service = require('./tasks.service');

const getTask = (req,res) => {
    service.getTask(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send("Internal Server Error");
    });
    
}

const saveTask = (req,res) => {
    console.log("err:",req.body);
    service.saveTask(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        console.log("Error:",err);
        res.status(500).send("Internal Server Error");
    });
}

const updateTask = (req,res) => {
    service.updateTask(req).then((result)=>{
        res.status(200).send("Updated Successfully");
    }).catch((err)=>{
        res.status(500).send("Internal Server Error");
    });
}

const deleteTask = (req,res) => {
    service.deleteTask(req).then((result)=>{
        res.status(200).send("Deleted Successfully");
    }).catch((err)=>{
        res.status(500).send("Internal Server Error");
    });
}

const getTaskById = (req,res) => {
    service.getTaskById(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send("Internal Server Error");
    });
}

module.exports = {
    getTask,
    saveTask,
    updateTask,
    deleteTask,
    getTaskById
}