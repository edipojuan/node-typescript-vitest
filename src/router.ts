import { Router } from 'express'
import { firsController } from './controllers/FirstController'

const router: Router = Router()

router.get('/', firsController.home)

export { router }
