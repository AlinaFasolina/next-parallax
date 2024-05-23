interface IAdress {
  city: string;
  street: string;
  zipcode: string;
}

interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: number;
  address: IAdress;
  phone: string;
  website: string;
  company: ICompany;
}

export interface IUsersArr {
  users: IUser[];
}

export interface IUserSingle {
  user: IUser;
}
