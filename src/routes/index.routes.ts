import { Router } from "express"
import * as AnimalsControllers from "../controllers/animalsControllers"
const router = Router()

router.get('/', AnimalsControllers.all)
router.get('/cachorros', AnimalsControllers.cachorros)
router.get('/gatos', AnimalsControllers.gatos)
router.get('/peixes', AnimalsControllers.peixes)


export default router