const fs= require('fs');
const path= require('path');

function createNewTask(body, tasksArray) {
    const task= body;
    // console.log(task);
    // console.log(tasksArray);
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

module.exports= {createNewTask, validateTask};