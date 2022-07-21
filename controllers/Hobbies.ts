import { NextFunction, Request, RequestHandler, Response } from 'express';
import Hobbies from '../models/hobbies';

//GET all hobbies
const getAllHobbies = (async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const xps = await Hobbies.getAllHobbies();
    return res.status(200).json(xps);
  } catch (err) {
    next(err);
  }
}) as RequestHandler;

export default {
  getAllHobbies,
};
