import React from 'react';
import { useStore } from 'effector-react';
import {
  $form,
  addValues,
  changeFormField,
  clearForm,
} from '../../model/public';
import { Button, Input } from 'UI';

export const InputForm: React.FC = () => {
  const { fullName, phone } = useStore($form);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '24px',
        border: '1px solid black',
        borderRadius: '8px',
        height: 'max-content',
        margin: '24px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginBottom: '24px',
        }}
      >
        <Input
          onChange={changeFormField}
          inputType='fullName'
          value={fullName}
        />
        <Input onChange={changeFormField} inputType='phone' value={phone} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Button
          onClick={clearForm}
          title='clear form'
          disabled={!Boolean(fullName.length || phone.length)}
        />
        <Button
          onClick={addValues}
          title='add record'
          disabled={!Boolean(fullName.length > 1 && phone.length > 1)}
        />
      </div>
    </div>
  );
};
