import { RowDataPacket } from 'mysql2';

export default interface IAddress extends RowDataPacket {
  id: number;
  title: string;
  dateStart: number;
  dateEnd: number;
  school: string;
}
