import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
const taskRoute = require("./routes/taskRoute")

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

// app.get('/', (req: Request, res: Response) => {
//   res.send('Express + TypeScript Server');
// });


// app.get('/task', (req: Request, res: Response) => {
//   dbConnect();
// })

app.use('/task', taskRoute)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});