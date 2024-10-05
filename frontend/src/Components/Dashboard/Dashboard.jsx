import React from 'react';
import { Chart } from '../Charts/Charts';
import { Card, CardContent, CardHeader } from '@mui/material';
import { VisaoGeral } from '../VisaoGeral/VisaoGeral';
import * as D from './Styles'
import { AnaliseDeComentarios } from '../AnaliseDeComentarios/AnaliseDeComentarios';

export const Dashboard = () => {
  return (
    <D.content >
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

      <Card style={{ marginTop: '10px' }}>
        <CardHeader title="Análise de comentários" />
        <CardContent>
          <AnaliseDeComentarios/>
        </CardContent>
      </Card>
    </D.content>
  );
};
