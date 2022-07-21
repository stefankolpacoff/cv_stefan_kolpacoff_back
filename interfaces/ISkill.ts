import { RowDataPacket } from 'mysql2';

export default interface ISkill extends RowDataPacket {
  id: number;
  title: string;
  image: string;
  type: boolean;
}
