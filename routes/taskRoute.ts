import express, {Router, Request, Response} from "express"
import dbConnect from '../../backend/db/mongoose'

export const taskRoute = Router();

taskRoute.post('/tasks', (req: Request, res: Response) => {
    res.send("Hello!")
})

taskRoute.get('/tasks/', (req: Request, res:Response) => {
    res.send("Hello!")
})