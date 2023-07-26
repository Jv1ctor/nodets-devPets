import { Request, Response } from "express";
import Animals from "../models/Animals";
const all = (_req: Request, res: Response) => {
  const listAnimals = Animals.getAnimals('all')

  res.render('all', {
    list: listAnimals
  })
}

const cachorros = (_req: Request, res: Response) => {
  const listAnimals = Animals.getAnimals('dog')

  res.render('cachorros', {
    list: listAnimals
  })
}

const gatos = (_req: Request, res: Response) => {
  const listAnimals = Animals.getAnimals('cat')

  res.render('gatos', {
    list: listAnimals
  })
}

const peixes = (_req: Request, res: Response) => {
  const listAnimals = Animals.getAnimals('fish')

  res.render('peixes', {
    list: listAnimals
  })
}

export {all, cachorros, gatos, peixes} 