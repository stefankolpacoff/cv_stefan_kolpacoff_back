import { RowDataPacket } from 'mysql2';

export default interface IEducation extends RowDataPacket {
  id: number;
  title: string;
  dateStart: number;
  dateEnd: number;
  school: string;
}
