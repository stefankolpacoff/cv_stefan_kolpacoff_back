import { RowDataPacket } from 'mysql2';

export default interface IComment extends RowDataPacket {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: number;
  email: string;
  subject: string;
  comment: string;
}
