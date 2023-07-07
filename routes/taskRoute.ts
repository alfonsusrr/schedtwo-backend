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

