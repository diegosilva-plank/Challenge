import { Joi, Segments, celebrate } from "celebrate";
import { Launch } from "../entities/Launch";

export const createLaunchValidator = celebrate({
  [Segments.BODY]: Joi.object<Launch>().keys({
    launch_code: Joi.string().required(),
    date: Joi.string().required(),
    success: Joi.boolean().required(),
    rocket: Joi.string().required(),
    crew: Joi.string()
  }),
});

export const updateLaunchValidator = celebrate({
  [Segments.BODY]: Joi.object<Launch>().keys({
    launch_code: Joi.string(),
    date: Joi.string(),
    success: Joi.boolean(),
    rocket: Joi.string(),
    crew: Joi.string()
  }),
});
