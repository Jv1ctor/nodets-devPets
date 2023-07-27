import { Animal as Animals } from "../models/Animals";
import type { Animal } from "../models/Animals";
import type { CategoryPets } from "../models/Animals";

interface PetsData {
  listAnimals: Animal[],
  bannerAnimal: string
}

const animalsData = (category: CategoryPets ): PetsData  => {
  const listAnimals: Animal[] = Animals.getAnimals(category)
  const bannerAnimal: string = Animals.getBanner(category)


  return {listAnimals, bannerAnimal}
}

export { animalsData }