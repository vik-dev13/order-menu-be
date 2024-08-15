export interface RequestBody<T> extends Express.Request {
  body: T;
  query: any;
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

export interface ICreateShopReq {
  adminId: string;
  name: string;
  address: {
    full_address?: string;
    city: string;
    state: string;
    country: string;
    pinCode: string;
  };
}
