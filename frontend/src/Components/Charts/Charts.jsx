import React, { useContext } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import { Context } from '../../Context/Context';

export const Chart = () => {
  const { allFeedbacks } = useContext(Context);

  // Verificando se tem feedbacks, caso não mostrará uma div que nao há feedbacks
  if (!allFeedbacks || (!allFeedbacks.isAnonymousFeedbacks && !allFeedbacks.nonAnonymousFeedbacks)) {
    return <div>Não há feedbacks disponíveis no momento</div>;
  }

  // Separando os feedbacks anonimos e nao anonimos
  const reviewValueAnon = allFeedbacks.isAnonymousFeedbacks || [];
  const reviewValueNon = allFeedbacks.nonAnonymousFeedbacks || [];

  // Objeto para contar as ocorrências de cada review
  const reviewCounts = {};

  // Variavel para contar os feedbacks
  let totalFeedbacks = 0

  // Contando feedbacks anônimos
  reviewValueAnon.forEach(feedback => {
    if (feedback && feedback.review) {
      const review = feedback.review;
      reviewCounts[review] = (reviewCounts[review] || 0) + 1;
      totalFeedbacks += 1
    }
  });

  // Contando feedbacks não anônimos
  reviewValueNon.forEach(feedback => {
    if (feedback && feedback.review) {
      const review = feedback.review;
      reviewCounts[review] = (reviewCounts[review] || 0) + 1;
      totalFeedbacks += 1
    }
  });

  // Variaveis para os totais
  let totalUnsatisfied = 0
  let totalNeutral = 0
  let totalSatisfied = 0
  let totalVerySatisfied = 0

  //Varrendo
  reviewValueAnon.forEach(feedback => {
    if (feedback.review === "unsatisfied") {
      totalUnsatisfied += 1
    } else if (feedback.review === "neutral") {
      totalNeutral += 1
    } else if (feedback.review === "satisfied") {
      totalSatisfied += 1
    } else {
      totalVerySatisfied += 1
    }
  })

  reviewValueNon.forEach(feedback => {
    if (feedback.review === "unsatisfied") {
      totalUnsatisfied += 1
    } else if (feedback.review === "neutral") {
      totalNeutral += 1
    } else if (feedback.review === "satisfied") {
      totalSatisfied += 1
    } else {
      totalVerySatisfied += 1
    }
  })

  // constantes para as porcentagens
  const percentageUnsatisfied = parseFloat(((totalUnsatisfied / totalFeedbacks) * 100).toFixed(2))
  const percentageNeutral = parseFloat(((totalNeutral / totalFeedbacks) * 100).toFixed(2))
  const percentageSatisfied = parseFloat(((totalSatisfied / totalFeedbacks) * 100).toFixed(2))
  const percentageVerySatisfied = parseFloat(((totalVerySatisfied / totalFeedbacks) * 100).toFixed(2))

  // data
  const data = [
      { name: 'Insatisfeitos', value: percentageUnsatisfied },
      { name: 'Neutros', value: percentageNeutral },
      { name: 'Satisfeitos', value: percentageSatisfied },
      { name: 'Muito Satisfeitos', value: percentageVerySatisfied },
  ]

  // Organizando do menor para o maior
  data.sort((a, b) => a.value - b.value)

  // Cores para o gráfico de pizza
  const COLORS = ['#0088FE', '#FFBB28', '#95C268', '#FF8042'];

  const RADIAN = Math.PI / 180;

  const cx = 150;
  const cy = 200;
  const iR = 50;
  const oR = 100;

  // Encontrar o índice da categoria com maior valor
  const maxValue = Math.max(...data.map(item => item.value))
  const maxIndex = data.findIndex(item => item.value === maxValue)

  // Cálculo da posição correta da agulha com base no acúmulo de proporções
  const cumulativeValue = data.slice(0, maxValue + 1).reduce((sum, entry) => sum + entry.value, 0);

  // Calcula o valor proporcional do maior feedback em relação ao total
  const value = cumulativeValue;

  const needle = (value, data, cx, cy, iR, oR, color) => {
    let total = 0;
      data.forEach((v) => {
      total += v.value;
    });

  console.log(value)

  console.log("total", total)
  const ang = 180.0 * (1 - value / total);
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 5;
  const x0 = cx + 5;
  const y0 = cy + 5;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return [
    <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
    <path d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`} stroke="none" fill={color} />,
  ];
};

  return (
    <ResponsiveContainer width="100%" height={400} >
      <PieChart style={{ marginTop: '10px' }}>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={data}
          cx={cx}
          cy={cy}
          innerRadius={iR}
          outerRadius={oR}
          fill="#8884d8"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        {needle(value, data, cx, cy, iR, oR, '#d0d000')} {/* Chamando a agulha */}
        <Tooltip />
        <Legend/>
      </PieChart>
    </ResponsiveContainer>
  );
};
