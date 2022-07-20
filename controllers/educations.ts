import { NextFunction, Request, RequestHandler, Response } from 'express';
import Education from '../models/education';

//GET all users
const getAllEducations = (async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log('coucou');
    const educations = await Education.getAllEducation();
    return res.status(200).json(educations);
  } catch (err) {
    next(err);
  }
}) as RequestHandler;

export default {
  getAllEducations,
};
