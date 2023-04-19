export interface IName {
  firstname: string;
  lastname: string;
}

export interface IAddress {
  city: string;
  street: string;
  number: number;
}

export interface IUser {
  id: number;
  email: string;
  username: string;
  password: string;
  name: IName;
  address: IAddress;
  phone: string;
}
