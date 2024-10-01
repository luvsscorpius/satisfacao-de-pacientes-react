import React, { useContext } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import { Context } from '../../Context/Context';

export const Chart = () => {
  const { allFeedbacks } = useContext(Context);

  // Verifique se allFeedbacks é definido e não está vazio
  if (!allFeedbacks || (!allFeedbacks.isAnonymousFeedbacks && !allFeedbacks.nonAnonymousFeedbacks)) {
    return <div>No feedback data available</div>;
  }

  const reviewValueAnon = allFeedbacks.isAnonymousFeedbacks || [];
  const reviewValueNon = allFeedbacks.nonAnonymousFeedbacks || [];

  // Contar as ocorrências de cada review
  const reviewCounts = {};

  // Contando feedbacks anônimos
  reviewValueAnon.forEach(feedback => {
    if (feedback && feedback.review) {
      const review = feedback.review;
      reviewCounts[review] = (reviewCounts[review] || 0) + 1;
    }
  });

  // Contando feedbacks não anônimos
  reviewValueNon.forEach(feedback => {
    if (feedback && feedback.review) {
      const review = feedback.review;
      reviewCounts[review] = (reviewCounts[review] || 0) + 1;
    }
  });

  // Transformar o objeto em um array para o gráfico
  const data = Object.keys(reviewCounts).map(key => ({
    name: key,
    value: reviewCounts[key],
  }));

  // Cores para o gráfico de pizza
  const COLORS = ['#0088FE', '#FFBB28', '#FF8042', '#FF8042'];

  return (
    <ResponsiveContainer width="100%" height={800}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};
