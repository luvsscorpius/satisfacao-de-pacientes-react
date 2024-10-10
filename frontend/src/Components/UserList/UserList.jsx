import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const UserList = (props) => {  
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
