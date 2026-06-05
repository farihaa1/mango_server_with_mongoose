import express, { Application, Request, Response } from "express"
import routes from "./routes";

const app: Application = express()


app.use(express.json());
app.use('/api', routes);;

app.get('/', (req: Request, res: Response) => {
    res.send('Server is running')
});

export default app;

