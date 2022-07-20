import { NextFunction, Request, RequestHandler, Response } from 'express';
import User from '../models/user';

//GET all users
const getAllUsers = (async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log('coucou');
    const users = await User.getAllUsers();
    return res.status(200).json(users);
  } catch (err) {
    next(err);
  }
}) as RequestHandler;

// GET user by ID
const getUserById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { idUser } = req.params;
    const user = await User.getUserById(Number(idUser));
    return res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};
export default {
  getAllUsers,
  getUserById,
};
