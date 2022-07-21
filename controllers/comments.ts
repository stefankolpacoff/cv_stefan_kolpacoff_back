import { NextFunction, Request, RequestHandler, Response } from 'express';
import IComment from '../interfaces/IComment';
import Comment from '../models/comment';

//POST comment by user

const postComment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const comment = req.body as IComment;
    comment.id = await Comment.postComment(comment);
    res.status(201).json(comment);
  } catch (err) {
    next();
  }
  console.log(req.body);
};

export default {
  postComment,
};
