import { Router } from "express";
import { CrudController } from "../controllers/genericController";
import { launchRoutes } from "./launchRoutes";
import * as services from "../services";
import { CrudService } from "../services/genericService";

const createRoute = <T>(path: string, service: CrudService<T>) => {
  const crudRouter = Router();

  const entityController = new CrudController(service);

  crudRouter
    .route(`/${path}`)
    .get(entityController.get)
    .post(entityController.create);

  crudRouter
    .route(`/${path}/:id`)
    .put(entityController.update)
    .delete(entityController.delete);

  return crudRouter;
};

const router = Router();

router.use(createRoute("rocket", services.rocketService));
router.use(createRoute("crewman", services.crewManService));
router.use(createRoute("crew", services.crewService));
router.use(launchRoutes)

export { router };
