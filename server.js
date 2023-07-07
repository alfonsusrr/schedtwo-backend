"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const taskRoute = require("./routes/taskRoute");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
// app.get('/', (req: Request, res: Response) => {
//   res.send('Express + TypeScript Server');
// });
// app.get('/task', (req: Request, res: Response) => {
//   dbConnect();
// })
app.use('/task', taskRoute);
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
