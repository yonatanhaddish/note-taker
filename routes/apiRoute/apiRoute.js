const router= require('express').Router();
const db = require('../../data/db.json');
const { createNewTask, validateTask, findById } = require('../../lib/db');

router.get('/notes', (req, res) => {
    let results= db;
    console.log(results);
    res.json(results);  
});

router.get('/notes/:id', (req, res) => {
    const result= findById(req.params.id, db);
    
    if(result) {
        res.json(result);
    }
    else {
        res.send(404);
    }
});

router.post('/notes', (req, res) => {
    
    res.json(req.body);

    if (!validateTask(req.body)) {
        res.status(400).send('The task tilte and text should not be empty!');
    }
    else {
        const task= createNewTask(req.body, db);
        res.json(task);
    }
});

module.exports= router;