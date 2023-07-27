import { Request, Response} from "express";
import { menuActive } from "../helpers/createObjMenu";
import { animalsData } from "../helpers/animalsData";


const all = (_req: Request, res: Response) => {
  const { listAnimals, bannerAnimal } = animalsData('all')
  const menuOption = menuActive('all')

  res.render('pages/page', {
    menu: menuOption,
    list: listAnimals,
    title: 'Todos os animais',
    banner: bannerAnimal
  })
}

const cachorros = (_req: Request, res: Response) => {
  const { listAnimals, bannerAnimal } = animalsData('dog')
  const menuOption = menuActive('dog')

  res.render('pages/page', {
    menu: menuOption,
    list: listAnimals,
    title: 'Cachorros',
    banner: bannerAnimal
  })
}

const gatos = (_req: Request, res: Response) => {
  const { listAnimals, bannerAnimal } = animalsData('cat')
  const menuOption = menuActive('cat')
  
  res.render('pages/page', {
    menu: menuOption,
    list: listAnimals,
    title: 'Gatos',
    banner: bannerAnimal
  })
}

const peixes = (_req: Request, res: Response) => {
  const { listAnimals, bannerAnimal } = animalsData('fish')
  const menuOption = menuActive('fish')

  res.render('pages/page', {
    menu: menuOption,
    list: listAnimals,
    title: 'Peixes',
    banner: bannerAnimal,

  })
}

export {all, cachorros, gatos, peixes} 