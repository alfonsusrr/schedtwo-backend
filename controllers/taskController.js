"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const asyncHandler = require('express-async-handler');
const Task = require('../models/tasks');
const dbConnect = require('../db/mongoose');
// @desc    Fetch all tasks
// @route   GET /api/tasks
// @access  Public
const getTasks = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    dbConnect();
    const tasks = yield Task.find({});
    res.status(200).json(tasks);
}));
// @desc    Create single task
// @route   POST /api/tasks
// @access  Public
const setTasks = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    dbConnect();
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
    const createdTask = yield task.save();
    res.status(201).json(createdTask);
}));
// @desc    Update single task
// @route   PUT /api/tasks/:id
// @access  Public
const updateTask = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    dbConnect();
    const task = yield Task.findById(req.params.id);
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
    const updatedTask = yield task.save();
    res.status(200).json(updatedTask);
}));
// @desc    Delete single task
// @route   DELETE /api/tasks/:id
// @access  Public
const deleteTask = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    dbConnect();
    const task = yield Task.findById(req.params.id);
    //check if task exists
    if (!task) {
        res.status(404);
        throw new Error('Task not found');
    }
    //delete task
    yield task.deleteOne();
    res.status(200).json({ message: 'Task removed' });
}));
module.exports = {
    getTasks,
    setTasks,
    updateTask,
    deleteTask,
};
