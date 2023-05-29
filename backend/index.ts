import express, {Express, Request, Response} from 'express';
import {router as testAPIRouter} from './routes/testAPI';
import cors from 'cors';

const app = express();
const port = 9000;

app.use(cors());
app.use('/testAPI', testAPIRouter);

app.get('/', (req: Request, res: Response) => {
    res.send('api created');
});

app.listen(port, () => {
    console.log(`[server]: Server is now running at http://localhost:${port}`);
});