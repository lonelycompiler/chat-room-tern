import express, {Express, Request, Response} from 'express';
const router = express.Router();

router.get('/', (req: Request, res: Response, next: any) => {
    res.send('API is properly working!');
});

export {router};