import { RowDataPacket } from 'mysql2';

export default interface IXp extends RowDataPacket {
  id: number;
  title: string;
  skills: string;
  dateStart: number;
  dateEnd: number;
  business: string;
}
