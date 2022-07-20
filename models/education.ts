import connection from '../db-config';
import IEducation from '../interfaces/IEducation';

const getAllEducation = async (): Promise<IEducation[]> => {
  const sql = `SELECT * FROM education`;
  const results = await connection.promise().query<IEducation[]>(sql);
  return results[0];
};

export default { getAllEducation };
