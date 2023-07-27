import { Request, Response } from "express";
import { Animal as Animals } from "../models/Animals";
import { menuActive } from "../helpers/createObjMenu";
import type { Animal } from "../models/Animals";


const search = (req: Request, res: Response) => {
  const searchValue: string = req.query.q as string 
  const searchAnimals: Animal[] = Animals.searchAnimals('all', searchValue)

  if(!searchValue){
    res.redirect('/')
    return
  } 
  
  res.render('pages/page', {
    menu: menuActive(''),
    list: searchAnimals,
    searchValue,
  })
}

export {search}