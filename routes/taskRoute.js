"use strict";

const express = require('express');
const router = express.Router();

//import task CRUD operation from controllers
const {
    getTasks,
    setTasks,
    updateTask,
    deleteTask,
    getTasksID,
} = require('../controllers/taskController');

router.route('/').get(getTasks).post(setTasks);
router.route('/:id').put(updateTask).delete(deleteTask).get(getTasksID);

module.exports = router;

