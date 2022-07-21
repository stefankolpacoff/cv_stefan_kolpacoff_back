import { NextFunction, Request, RequestHandler, Response } from 'express';
import IComment from '../interfaces/IComment';
import Comment from '../models/comment';
import Joi from 'joi';
import { ErrorHandler } from '../helpers/errors';

//POST comment by user
const validateForm = (req: Request, res: Response, next: NextFunction) => {
  let required: Joi.PresenceMode = 'optional';
  if (req.method === 'POST') {
    required = 'required';
  }

  const errors = Joi.object({
    firstName: Joi.string().max(255).presence(required),
    email: Joi.string().max(255).presence(required),
    comment: Joi.string().max(255).presence(required),
    id: Joi.number().optional().allow(null), // pour react-admin
  }).validate(req.body, { abortEarly: false }).error;
  if (errors) {
    console.log(errors.message);
    next(new ErrorHandler(422, errors.message));
  } else {
    next();
  }
};
const postComment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const comment = req.body as IComment;
    console.log();
    comment.id = await Comment.postComment(comment);
    res.status(201).json(comment);
  } catch (err) {
    next(err);
  }
};

export default {
  postComment,
};
