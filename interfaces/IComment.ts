import { RowDataPacket } from 'mysql2';

export default interface IComment extends RowDataPacket {
  id: number;
  firstName: string;
  flastName: string;
  phoneNumber: number;
  email: string;
  subject: string;
  comment: string;
}
