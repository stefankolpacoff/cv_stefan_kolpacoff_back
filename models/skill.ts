import connection from '../db-config';
import ISkill from '../interfaces/ISkill';

const getTechSkills = async (): Promise<ISkill[]> => {
  const sql = `SELECT * FROM skills WHERE type = 0`;
  const results = await connection.promise().query<ISkill[]>(sql);
  return results[0];
};

const getSoftSkills = async (): Promise<ISkill[]> => {
  const sql = `SELECT * FROM skills WHERE type = 1`;
  const results = await connection.promise().query<ISkill[]>(sql);
  return results[0];
};
export default { getTechSkills, getSoftSkills };
