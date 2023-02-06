import { Dispatch, SetStateAction } from "react";
import { IContacts } from "./IContacts";
import { IUser } from "./IUser";

export interface IProviderProps {
  user: IUser;
  userList: IUser[];
  setUserList: Dispatch<SetStateAction<IUser[]>>;
  next: string;
  setNext: Dispatch<SetStateAction<string>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  login: (data: IUser) => void;
  createContacts: (data: IContacts) => void;
  registerUser: (data: IUser) => void;
}
