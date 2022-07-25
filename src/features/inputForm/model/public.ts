import { createEvent, createStore } from 'effector';
import { IContact } from '../../../types';

export const $form = createStore<IContact>({
  fullName: '',
  phone: '',
});

export const changeFormField = createEvent<[string, string]>();

export const clearForm = createEvent<void>();

export const addValues = createEvent<void>();
