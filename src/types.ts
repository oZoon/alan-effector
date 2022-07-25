export interface IContact {
  fullName: string;
  phone: string;
}

export interface IContactItem extends IContact {
  id: string;
  isDelete: boolean;
  isInSearch: boolean;
}

export interface IParams {
  contactsList: IContactItem[];
  value?: string;
  id?: string;
}

export type searchKey = keyof IContact;

export interface ISearchParams extends IParams {
  key: searchKey;
}
