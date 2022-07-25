import { sample } from 'effector';
import { $contactsList } from '../../contactList/model/private';
import { $searchField } from '../../contactList/model/public';
import { $form, clearForm, addValues, changeFormField } from './public';

$form
  .on(changeFormField, (inputs, [value, fieldName]) => ({
    ...inputs,
    [fieldName]: value,
  }))
  .reset(clearForm);

sample({
  clock: addValues,
  source: {
    contactsList: $contactsList,
    form: $form,
  },
  fn: ({ contactsList, form }, _) =>
    contactsList.concat({
      ...form,
      isDelete: false,
      isInSearch: true,
      id: `${form.phone}_${contactsList.length}`,
    }),
  target: $contactsList,
});

sample({
  clock: addValues,
  fn: () => ({
    fullName: '',
    phone: '',
  }),
  target: $form,
});

$searchField.reset(addValues);
