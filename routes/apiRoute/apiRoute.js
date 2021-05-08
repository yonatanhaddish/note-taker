const router= require('express').Router();
const db = require('../../data/db.json');
const { createNewTask, validateTask } = require('../../lib/db');

router.get('/notes', (req, res) => {
    let results= db;
    console.log(results);
    res.json(results);

    
});

router.post('/notes', (req, res) => {
    
    res.json(req.body);
    // console.log('testtest' + req.body);
    // here we have to create a unique ID for each data task

    if (!validateTask(req.body)) {
        res.status(400).send('The task tilte and text should not be empty!');
    }
    else {
        const task= createNewTask(req.body, db);
        res.json(task);
    }
});







module.exports= router;