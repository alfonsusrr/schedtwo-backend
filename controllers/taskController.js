const asyncHandler = require('express-async-handler');

const Task = require('../models/tasks');

// @desc    Fetch all tasks
// @route   GET /api/tasks
// @access  Public
const getTasks = asyncHandler(async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
});

// @desc    Fetch task by id
// @route   GET /api/tasks/:id
// @access  Public
const getTasksID = asyncHandler(async (req, res) => {
    const tasks = await Task.findById(req.params.id);
    res.status(200).json(tasks);
});


// @desc    Create single task
// @route   POST /api/tasks
// @access  Public
const setTasks = asyncHandler(async (req, res) => {
    const { title, description, targetTime } = req.body;
    if (!title || !description || !targetTime) {
        res.status(400);
        throw new Error('Please fill all the fields');
    }

    const task = new Task({
        title,
        description,
        targetTime,
    });
    const createdTask = await task.save();
    res.status(201).json(createdTask);
});

// @desc    Update single task
// @route   PUT /api/tasks/:id
// @access  Public
const updateTask = asyncHandler(async (req, res) => {
    const task = await Task.findById(req.params.id);
    //check if task exists
    if (!task) {
        res.status(404);
        throw new Error('Task not found');
    }

    //update task
    task.title = req.body.title || task.title;
    task.description = req.body.description || task.description;
    task.targetTime = req.body.targetTime || task.targetTime;
    task.completed = req.body.completed || task.completed;

    const updatedTask = await task.save();
    res.status(200).json(updatedTask);
});

// @desc    Delete single task
// @route   DELETE /api/tasks/:id
// @access  Public
const deleteTask = asyncHandler(async (req, res) => {
    const task = await Task.findById(req.params.id);
    //check if task exists
    if (!task) {
        res.status(404);
        throw new Error('Task not found');
    }

    //delete task
    await task.deleteOne();
    res.status(200).json({ message: 'Task removed' });
});

module.exports = {
    getTasks,
    setTasks,
    updateTask,
    deleteTask,
    getTasksID,
}
