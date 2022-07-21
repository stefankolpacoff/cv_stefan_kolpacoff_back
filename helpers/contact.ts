/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-explicit-any, @typescript-eslint/restrict-plus-operands */
import { Request, RequestHandler, Response } from 'express';

const nodemailer = require('nodemailer');

interface IComment {
  firstName: string;
  lastName: string;
  phoneNumber: number;
  email: string;
  subject: string;
  comment: string;
}

const sendMail = (async (req: Request, res: Response): Promise<void> => {
  const { firstName, lastName, phoneNumber, email, subject, comment } =
    req.body as IComment;
  const transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
      user: process.env.USER_MAIL,
      pass: process.env.PWD_MAIL,
    },
  });

  const mailOptions = {
    from: 'ContactForm',
    sender: 'sk.dev.outlook.fr',
    to: 'sk.dev@outlook.fr',
    subject: 'Message reçu via le CV SK',
    text: `Vous avez reçu un mail de : ${email} !
        Nom : ${firstName} ${lastName}
        Sujet : ${subject}
        Tel: ${phoneNumber}
        Message : ${comment}`,
  };

  await transporter.sendMail(mailOptions, function (error: object, info: any) {
    if (error) {
      console.log(error);
      res.sendStatus(500);
    } else {
      console.log('Email sent: ' + info.response);
      res.sendStatus(200);
    }
  });
}) as RequestHandler;

export default { sendMail };
