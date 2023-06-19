"use strict";
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
