import connection from '../db-config';
import IUser from '../interfaces/IUser';

const getAllUsers = async (): Promise<IUser[]> => {
  const sql = `SELECT * FROM users`;
  const results = await connection.promise().query<IUser[]>(sql);
  return results[0];
};

const getUserById = async (idUser: number): Promise<IUser> => {
  const [results] = await connection
    .promise()
    .query<IUser[]>('SELECT * FROM users WHERE id = ?', [idUser]);

  return results[0];
};

export default { getAllUsers, getUserById };
