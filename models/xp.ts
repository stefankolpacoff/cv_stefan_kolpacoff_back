import connection from '../db-config';
import IXp from '../interfaces/IXp';

const getAllXp = async (): Promise<IXp[]> => {
  const sql = `SELECT * FROM xp`;
  const results = await connection.promise().query<IXp[]>(sql);
  return results[0];
};

export default { getAllXp };
