import React from "react";
import { List, Datagrid, TextField } from 'react-admin';

export const FeedbacksList = (props) => {
    // Adicione o console.log aqui
    console.log('Dados recebidos:', props.data); // Isso mostrará os dados recebidos
    
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