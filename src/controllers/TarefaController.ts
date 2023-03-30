import { Request, Response } from "express";
import db from '../config/database'


export const criarTarefa = async (req: Request, res: Response): Promise<void> => {
  const { tarefa, concluido} = req.body;
  const response = await db.query(
    'INSERT INTO tarefas (tarefa, concluido) VALUES ($1, $2)',
    [tarefa, concluido],
  );

  res.status(201).send({
    message: 'Tarefa adicionada com sucesso',
    body: {
      tarefa: { tarefa, concluido },
    },
  });
};


export const listarTarefas = async (req: Request, res: Response): Promise<void> => {
  const response = await db.query(
    'SELECT * FROM tarefas ORDER BY tarefa ASC', []
  );
  res.status(200).send(response.rows);
};

export const deletarTarefa = async (req: Request, res: Response): Promise<void> => {
  const id: number = parseInt(req.params.id);
  await db.query('DELETE FROM tarefas WHERE id = $1', [
    id,
  ]);

  res.status(200).send({ message: 'Tarefa deletada com sucesso', id });
};