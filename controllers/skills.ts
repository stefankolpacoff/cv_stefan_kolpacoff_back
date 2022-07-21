import { NextFunction, Request, RequestHandler, Response } from 'express';
import Skill from '../models/skill';

//GET tech users
const getTechSkills = (async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await Skill.getTechSkills();
    return res.status(200).json(users);
  } catch (err) {
    next(err);
  }
}) as RequestHandler;

// GET soft by ID
const getSoftSkills = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const skill = await Skill.getSoftSkills();
    return res.status(200).json(skill);
  } catch (err) {
    next(err);
  }
};
export default {
  getTechSkills,
  getSoftSkills,
};
