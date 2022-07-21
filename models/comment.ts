import { ResultSetHeader } from 'mysql2';
import connection from '../db-config';
import IComment from '../interfaces/IComment';

// POST comment
const postComment = async (comment: IComment): Promise<number> => {
  const results = await connection
    .promise()
    .query<ResultSetHeader>(
      'INSERT INTO comments (firstName, lastName, phoneNumber, email, subject, comment) VALUES (?,?,?,?,?,?)',
      [
        comment?.firstName,
        comment?.lastName,
        comment?.phoneNumber,
        comment?.email,
        comment?.subject,
        comment?.comment,
      ]
    );
  return results[0].insertId;
};

export default { postComment };
