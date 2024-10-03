import React from 'react';
import { Chart } from '../Charts/Charts';
import { Card, CardContent, CardHeader } from '@mui/material';
import { VisaoGeral } from '../VisaoGeral/VisaoGeral';

export const Dashboard = () => {
  return (
    <>
      <Card style={{ marginTop: '10px' }}>
        <CardHeader title="Visão Geral" />
        <CardContent>
          <VisaoGeral />
        </CardContent>
      </Card>

      <Card style={{ marginTop: '10px' }}>
        <CardHeader title="Gráfico de satisfação" />
        <CardContent>
          <Chart />
        </CardContent>
      </Card>
    </>
  );
};
