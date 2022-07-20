import { RowDataPacket } from 'mysql2';

export default interface IAddress extends RowDataPacket {
  id: number;
  name: string;
  email: string;
  comment: string;
}
