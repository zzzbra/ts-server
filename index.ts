import express, { Express, Request, Response } from 'express';
import dotenv from "dotenv";
dotenv.config();

const app: Express = express()
const port = process.env.PORT || 8000;

app.use(express.static('front'))

app.get('/', async (req: Request, res: Response) => {
  res.send("Hello World");
})

app.listen(port, () => console.log(`listening on  http://localhost:${port}`))