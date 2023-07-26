import { Request, Response } from "express";

const all = (_req: Request, res: Response) => {
  res.render('all')
}

const cachorros = (_req: Request, res: Response) => {
  res.render('cachorros')
}

const gatos = (_req: Request, res: Response) => {
  res.render('gatos')
}

const peixes = (_req: Request, res: Response) => {
  res.render('peixes')
}

export {all, cachorros, gatos, peixes} 