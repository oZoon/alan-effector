import React from 'react';
import { useStore } from 'effector-react';
import { Button } from './Button';
import {
  $filteredList,
  deleteContactItem,
} from '../features/contactList/model/public';

export const List: React.FC = () => {
  const contactsList = useStore($filteredList);

  return (
    <>
      {contactsList.map((item) => (
        <div
          key={item.id}
          style={{ display: 'flex', marginBottom: '8px' }}
        >
          <div style={{ width: '273px' }}>{item.fullName}</div>
          <div style={{ width: '260px' }}>{item.phone}</div>
          <Button
            onClick={deleteContactItem}
            arg={item.id}
            title='удалить запись'
          />
        </div>
      ))}
    </>
  );
};
