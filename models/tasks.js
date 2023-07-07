"use strict";
// interface ITask {
//     name: string;
//     createdAt: Date;
//     completed: boolean;
//     priority: number;
// }
const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    user: {
        type: String,
        required: false,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        required: true,
        default: false,
    },
    targetTime: {
        type: Date,
        required: true,
    },
}, {
    timestamps: true,
});
module.exports = mongoose.model('Task', taskSchema);
