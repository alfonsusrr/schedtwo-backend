"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const { default: dbConnect } = require("./db/mongoose");
const { errorHandler } = require("./middleware/errorMidleware");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
// app.get('/', (req: Request, res: Response) => {
//   res.send('Express + TypeScript Server');
// });
// app.get('/task', (req: Request, res: Response) => {
//   dbConnect();
// })
/*
    app.use('/', routes_1.routes);
    app.listen(port, () => {
        console.log(`⚡️[server]: Server started on ${port}`);
    });
*/

//establist connection to database
const dbConnect_1 = __importDefault(require("./db/mongoose"));
dbConnect();



//use json and urlencoded
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }));

//use task route
app.use('/api/tasks', require('./routes/taskRoute'));
app.use(errorHandler);

//listen to port
app.listen(port, () => {console.log(`⚡️[server]: Server started on ${port}`);});