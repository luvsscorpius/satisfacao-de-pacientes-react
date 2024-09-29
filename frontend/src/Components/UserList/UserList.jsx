import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const UserList = (props) => {
  // Adicione o console.log aqui
  console.log('Dados recebidos:', props.data); // Isso mostrará os dados recebidos
  
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="_id" label="ID" />
        <TextField source="username" label="Username" />
        {/* Exiba outros campos que você desejar */}
      </Datagrid>
    </List>
  );
};
