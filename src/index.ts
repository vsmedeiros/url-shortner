import dotenv from 'dotenv';
dotenv.config();
import express, { Response, Request } from "express";
import mongoConnection from "./database/db";
import urlcontroller from "./routes/urlcontroller.route";
const api = express();
api.use(express.json());
api.use(express.urlencoded({ extended: true }));
mongoConnection.connect();
api.use(urlcontroller);
api.get('/test', (req: Request, res: Response) => {
    res.sendStatus(200);
});
api.listen(5000, () => console.log("Server iniciado na porta 5000!"));
