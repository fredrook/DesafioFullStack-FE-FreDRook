import { IContacts } from "./IContacts";

export interface IUser {
  id?: string;
  fullName?: string;
  email?: string;
  password?: string;
  phoneNumber?: number;
  contact:IContacts[]
}
