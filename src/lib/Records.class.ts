import { IContactItem } from '../types';

const KEY_STORAGE = 'alan-e';

class Records {
  setRecord(record: IContactItem[]) {
    localStorage.setItem(KEY_STORAGE, JSON.stringify(record));
  }

  getRecord() {
    return JSON.parse(localStorage.getItem(KEY_STORAGE) || '[]');
  }
}

export default new Records();
