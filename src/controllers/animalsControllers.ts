import { Request, Response } from "express";
import Animals from "../models/Animals";
const all = (_req: Request, res: Response) => {
  const listAnimals = Animals.getAnimals('all')
  const bannerAnimal = Animals.getBanner('all')

  res.render('all', {
    list: listAnimals,
    banner: bannerAnimal
  })
}

const cachorros = (_req: Request, res: Response) => {
  const listAnimals = Animals.getAnimals('dog')
  const bannerAnimal = Animals.getBanner('dog')

  res.render('cachorros', {
    list: listAnimals,
    banner: bannerAnimal
  })
}

const gatos = (_req: Request, res: Response) => {
  const listAnimals = Animals.getAnimals('cat')
  const bannerAnimal = Animals.getBanner('cat')
  
  res.render('gatos', {
    list: listAnimals,
    banner: bannerAnimal
  })
}

const peixes = (_req: Request, res: Response) => {
  const listAnimals = Animals.getAnimals('fish')
  const bannerAnimal = Animals.getBanner('fish')

  res.render('peixes', {
    list: listAnimals,
    banner: bannerAnimal,
    
  })
}

export {all, cachorros, gatos, peixes} 