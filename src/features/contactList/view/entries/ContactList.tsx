import React from 'react';
import { useStore } from 'effector-react';
import {
  $searchField,
  changeSearchField,
  clearSearchField,
  restoreList,
} from '../../model/public';
import { Button, Input, List } from 'UI';

export const ContactList: React.FC = () => {
  const { fullName, phone } = useStore($searchField);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '12px' }}>
      <Button onClick={restoreList} title='reset' />
      <div
        style={{
          display: 'flex',
          margin: '8px 0',
          justifyContent: 'space-around',
        }}
      >
        фильтр
        <div style={{ display: 'flex' }}>
          <Input
            onChange={changeSearchField}
            inputType='fullName'
            value={fullName}
          />
          <Button
            onClick={clearSearchField}
            arg='fullName'
            title='clear name'
            disabled={!Boolean(fullName.length)}
          />
        </div>
        <div style={{ display: 'flex' }}>
          <Input onChange={changeSearchField} inputType='phone' value={phone} />
          <Button
            onClick={clearSearchField}
            arg='phone'
            title='clear phone'
            disabled={!Boolean(phone.length)}
          />
        </div>
      </div>
      <List />
    </div>
  );
};
