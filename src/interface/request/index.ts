export interface RequestBody<T> extends Express.Request {
  body: T;
}

export interface ILoginReq {
  email: string;
  password: string;
}

export interface IRegisterReq {
  name: string;
  email: string;
  password: string;
}
