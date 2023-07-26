import { Request, Response } from "express";
import { Animal as Animals } from "../models/Animals";
import type { Animal } from "../models/Animals";
import type { CategoryPets } from "../models/Animals";

interface PetsData {
  listAnimals: Animal[],
  bannerAnimal: string
}

const animalsData = (req: Request, category: CategoryPets ): PetsData  => {
  const searchValue: string = req.query.q as string  
  const listAnimals: Animal[] = Animals.getAnimals(category, searchValue)
  const bannerAnimal: string = Animals.getBanner(category)

  return {listAnimals, bannerAnimal}
}

const all = (req: Request, res: Response) => {
  const { listAnimals, bannerAnimal } = animalsData(req, 'all')

  res.render('all', {
    list: listAnimals,
    banner: bannerAnimal
  })
}

const cachorros = (req: Request, res: Response) => {
  const { listAnimals, bannerAnimal } = animalsData(req, 'dog')

  res.render('cachorros', {
    list: listAnimals,
    banner: bannerAnimal
  })
}

const gatos = (req: Request, res: Response) => {
  const { listAnimals, bannerAnimal } = animalsData(req, 'cat')
  
  res.render('gatos', {
    list: listAnimals,
    banner: bannerAnimal
  })
}

const peixes = (req: Request, res: Response) => {
  const { listAnimals, bannerAnimal } = animalsData(req, 'fish')

  res.render('peixes', {
    list: listAnimals,
    banner: bannerAnimal,

  })
}

export {all, cachorros, gatos, peixes} 