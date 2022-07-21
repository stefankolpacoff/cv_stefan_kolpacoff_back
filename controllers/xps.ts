import { NextFunction, Request, RequestHandler, Response } from 'express';
import Xp from '../models/xp';

//GET all users
const getAllXp = (async (req: Request, res: Response, next: NextFunction) => {
  try {
    const xps = await Xp.getAllXp();
    return res.status(200).json(xps);
  } catch (err) {
    next(err);
  }
}) as RequestHandler;

export default {
  getAllXp,
};
