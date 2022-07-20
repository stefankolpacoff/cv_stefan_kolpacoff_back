import { RowDataPacket } from 'mysql2';

export default interface IUser extends RowDataPacket {
  id: number;
  firstname: string;
  lastname: string;
  phoneNumber: number;
  title: string;
  email: string;
  description: string;
  userPicture: string;
  streetAddress: string;
  city: string;
  isAdmin: number;
}
