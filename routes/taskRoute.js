"use strict";
/*
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.taskRoute = void 0;
    const express_1 = require("express");
    exports.taskRoute = (0, express_1.Router)();
    exports.taskRoute.post('/tasks', (req, res) => {
        res.send("Hello!");
    });
    exports.taskRoute.get('/tasks/', (req, res) => {
        res.send("Hello!");
    });
*/

const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

//import task CRUD operation from controllers
const {
    getTasks,
    setTasks,
    updateTask,
    deleteTask,
} = require('../controllers/taskController');

router.route('/').get(getTasks).post(setTasks);
router.route('/:id').put(updateTask).delete(deleteTask);

module.exports = router;

