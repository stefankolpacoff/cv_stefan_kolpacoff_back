import connection from '../db-config';
import IHobbie from '../interfaces/IHobbie';

const getAllHobbies = async (): Promise<IHobbie[]> => {
  const sql = `SELECT * FROM hobbies`;
  const results = await connection.promise().query<IHobbie[]>(sql);
  return results[0];
};

export default { getAllHobbies };
