const fs= require('fs');
const path= require('path');
var uniqid= require('uniqid');

function createNewTask(body, tasksArray) {
    const task= body;
    // console.log(task);
    // console.log(tasksArray);
    task.id= uniqid();
    tasksArray.push(task);
    fs.writeFileSync(
        path.join(__dirname, '../data/db.json'),
        JSON.stringify( tasksArray , null, 2)
    );
    return task;
}

function validateTask(task) {
    console.log('task' + task);
    if (!task.title) {
        return false;
    }
    if (!task.text) {
        return false;
    }
    return true;
}

function findById(id, tasksArray) {
    const result= tasksArray.filter(element => element.id === id)[0];
    return result;
}


module.exports= {createNewTask, validateTask, findById};