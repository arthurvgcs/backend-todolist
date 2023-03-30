import { Router } from "express";
import * as tarefaController from '../controllers/TarefaController'

const router: Router = Router()

router.post('/tarefas', tarefaController.criarTarefa);

router.get('/tarefas', tarefaController.listarTarefas);

router.put('/tarefas/:id', tarefaController.atualizarTarefa)

router.delete('/tarefas/:id', tarefaController.deletarTarefa);

export default router;