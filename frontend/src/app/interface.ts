export enum UserRole {
  RolAdministrador = 'admin',
  RolOperario = 'operator',
}
export interface IUser {
  id?: string;
  name: string;
  apellido: string;
  identification?: string;
  email: string;
  password?: string;
  confirmPassword?: string;
  phone: string;
  role?: UserRole | '';
}

export interface IUserLogin {
  email: string;
  password: string;
}

