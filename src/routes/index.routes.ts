import { Router } from "express"
import * as pageControllers from "../controllers/pageControllers"
import { search as searchController} from "../controllers/searchController"

const router = Router()

router.get('/', pageControllers.all)
router.get('/cachorros', pageControllers.cachorros)
router.get('/gatos', pageControllers.gatos)
router.get('/peixes', pageControllers.peixes)

router.get('/search', searchController)


export default router