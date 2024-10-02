import React from 'react';
import { Chart } from '../Charts/Charts';
import { Card, CardContent, CardHeader } from '@mui/material';

export const Dashboard = () => {
  return (
    <Card style={{marginTop: '10px'}}>
      <CardHeader title="Gráfico de satisfação" />
      <CardContent>
        <Chart />
      </CardContent>
    </Card>
  );
};
