import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import indexRouter from './routes/index';
import tarefaRouter from './routes/TarefaRoutes';

const app: Application = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(indexRouter);
app.use('/api/', tarefaRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Erro na aplicação!');
});

export default app;