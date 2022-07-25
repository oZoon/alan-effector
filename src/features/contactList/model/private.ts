import { createEffect, createEvent, createStore } from 'effector';
import { getFullName, getPhone } from '../../../mockData/generators';
import { NAMES, RECORDS_LENGTH } from '../../../mockData/mockNames';
import { IContactItem, IContact } from '../../../types';
import records from '../../../lib/Records.class';

export const initLocalStorage = createEvent<IContactItem[]>();
export const $contactsList = createStore<IContactItem[]>([]);
export const setLocalStorageFx = createEffect((contactsList: IContactItem[]) =>
  records.setRecord(contactsList)
);

export const getSearchList = (
  list: IContactItem[],
  contact: IContact
): IContactItem[] => {
  let newContactsList: IContactItem[];

  const isphoneLength = contact.phone.length > 1;
  const isNameLength = contact.fullName.length > 1;

  if (isphoneLength || isNameLength) {
    newContactsList = list.map((item) => {
      const isPhoneIncludes = item.phone.includes(contact.phone);
      const isNameIncludes = item.fullName.includes(contact.fullName);
      return {
        ...item,
        isInSearch:
          ((isphoneLength && isPhoneIncludes) || !isphoneLength) &&
          ((isNameLength && isNameIncludes) || !isNameLength),
      };
    });
  } else {
    newContactsList = list.map((item) => ({
      ...item,
      isInSearch: true,
    }));
  }
  return newContactsList;
};

export const initContactList: IContactItem[] = Array(RECORDS_LENGTH)
  .fill(null)
  .map((_, index) => {
    const phone = getPhone();
    return {
      fullName: getFullName(NAMES),
      phone,
      id: `${phone}_${index}`,
      isDelete: false,
      isInSearch: true,
    };
  });
