import React from 'react';
import { ContactList } from '../../../features/contactList/view';
import { InputForm } from '../../../features/inputForm/view';

export const App: React.FC = () => {
  return (
    <div style={{display: 'flex'}}>
      <ContactList />
      <InputForm />
    </div>
  );
};
