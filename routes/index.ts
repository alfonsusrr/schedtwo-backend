import express from 'express'
import { taskRoute } from './taskRoute'

export const routes = express.Router();

routes.use(taskRoute)