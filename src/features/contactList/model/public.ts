import { createEvent, createStore } from 'effector';
import { IContact, IContactItem } from '../../../types';

export const restoreList = createEvent<void>();
export const changeSearchField = createEvent<[string, string]>();
export const $searchField = createStore<IContact>({
  fullName: '',
  phone: '',
});

export const clearSearchField = createEvent<string>();
export const $filteredList = createStore<IContactItem[]>([]);
export const deleteContactItem = createEvent<string>();
