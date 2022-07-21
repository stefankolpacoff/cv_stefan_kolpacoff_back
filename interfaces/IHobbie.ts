import { RowDataPacket } from 'mysql2';

export default interface IHobbie extends RowDataPacket {
  id: number;
  title: string;
  image: string;
}
