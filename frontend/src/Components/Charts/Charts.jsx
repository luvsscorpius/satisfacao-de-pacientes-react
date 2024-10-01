import React from 'react'
import {ResponsiveContainer, LineChart} from 'recharts'

const data = [
    { name: 'Jan', value: 30 },
    { name: 'Feb', value: 40 },
    { name: 'Mar', value: 25 },
    { name: 'Apr', value: 50 },
    { name: 'May', value: 60 },
  ];

export const Charts = () => {
  <ResponsiveContainer>
    <LineChart data={data}>

    </LineChart>
  </ResponsiveContainer>
}
