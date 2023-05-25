import { Router } from 'express'

import {
  createLaunchValidator,
  updateLaunchValidator,
} from '../validators/launchValidator'
import { CrudController } from '../controllers/genericController'
import { launchService } from '../services'

const launchController = new CrudController(launchService)
const launchRoutes = Router()

launchRoutes
  .route('/launch')
  .get(launchController.get)
  .post(createLaunchValidator, launchController.create)

launchRoutes
  .route('/launch/:id')
  .put(updateLaunchValidator, launchController.update)
  .delete(launchController.delete)

export { launchRoutes }
