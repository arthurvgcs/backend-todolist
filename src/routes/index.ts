import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/api', (req: Request, res: Response) => {
    res.status(200).send({
        success: 'true',
        message: 'API DO TO-DO LIST',
        version: '1.0.0',
    });
});

export default router;