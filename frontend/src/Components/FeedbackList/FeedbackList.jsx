import React from "react";
import { List, Datagrid, TextField } from 'react-admin';

export const FeedbacksList = (props) => {
    return (
      <List {...props}>
        <Datagrid>
          <TextField source="isAnonymous" label="Anônimo?" />
          <TextField source="review" label="Avaliação" />
          {/* Exiba outros campos que você desejar */}
        </Datagrid>
      </List>
    );
  };