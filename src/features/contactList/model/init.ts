import { forward, sample } from 'effector';
import {
  initLocalStorage,
  $contactsList,
  initContactList,
  setLocalStorageFx,
  getSearchList,
} from './private';
import {
  $searchField,
  changeSearchField,
  restoreList,
  clearSearchField,
  deleteContactItem,
  $filteredList,
} from './public';

$contactsList.on(initLocalStorage, (_, data) => {
  return data;
});

forward({
  from: $contactsList,
  to: setLocalStorageFx,
});

$searchField
  .on(changeSearchField, (inputs, [value, fieldName]) => ({
    ...inputs,
    [fieldName]: value,
  }))
  .reset(restoreList);

sample({
  clock: clearSearchField,
  source: $searchField,
  fn: (store, fieldName) => ({
    ...store,
    [fieldName]: '',
  }),
  target: $searchField,
});

sample({
  clock: restoreList,
  source: $contactsList,
  fn: (contactsList) =>
    contactsList.map((contactItem) => ({
      ...contactItem,
      isDelete: false,
      isInSearch: true,
    })),
  target: $contactsList,
});

sample({
  clock: deleteContactItem,
  source: $contactsList,
  fn: (list, id) => {
    const newContactsList = [...list];
    const index = newContactsList.findIndex(
      (contactItem) => contactItem.id === id
    );

    if (index !== -1) {
      newContactsList[index] = {
        ...newContactsList[index],
        isDelete: true,
      };
    }

    return newContactsList;
  },
  target: $contactsList,
});

sample({
  clock: $searchField,
  source: $contactsList,
  fn: getSearchList,
  target: $contactsList,
});

$filteredList.on($contactsList, (_, data) =>
  data.filter((item) => !item.isDelete && item.isInSearch)
);

initLocalStorage(initContactList);
