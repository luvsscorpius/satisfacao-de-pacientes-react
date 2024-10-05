import React, { useContext } from 'react'
import { Context } from '../../Context/Context'
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip, Cell } from 'recharts'
import * as V from './Styles'

export const VisaoGeral = () => {
    const { allFeedbacks } = useContext(Context)

    // Separando os feedbacks
    const anoFeedbacks = allFeedbacks.isAnonymousFeedbacks || []
    const nonAnoFeedbacks = allFeedbacks.nonAnonymousFeedbacks || []

    // Variavel para contar os feedbacks
    let totalFeedbacks = 0

    // Varrendo os feedbacks anonimos
    anoFeedbacks.forEach(feedback => {
        if (feedback) {
            totalFeedbacks += 1
        }

        return totalFeedbacks
    })

    // Varrendo os feedbacks nao anonimos
    nonAnoFeedbacks.forEach(feedback => {
        if (feedback) {
            totalFeedbacks += 1
        }

        return totalFeedbacks
    })

    console.log(totalFeedbacks)


    // Calculando a porcentagem de feedbacks anonimos e nao anonimos
    let totalFeedbacksAno = 0
    let totalFeedbacksnonAno = 0

    // Varrendo os feedbacks anonimos
    anoFeedbacks.forEach(feedback => {
        if (feedback) {
            totalFeedbacksAno += 1
        }

        return totalFeedbacksAno
    })

    // Varrendo os feedbacks nao anonimos
    nonAnoFeedbacks.forEach(feedback => {
        if (feedback) {
            totalFeedbacksnonAno += 1
        }

        return totalFeedbacksnonAno
    })

    const porcentageFeedbacksAno = parseFloat(((totalFeedbacksAno / totalFeedbacks) * 100).toFixed(2))
    const porcentageFeedbacksNonAno = parseFloat(((totalFeedbacksnonAno / totalFeedbacks) * 100).toFixed(2))
    console.log(porcentageFeedbacksAno, porcentageFeedbacksNonAno)

    const data = [
        { name: 'Anônimos', value: porcentageFeedbacksAno },
        { name: 'Não Anônimos', value: porcentageFeedbacksNonAno },
    ]

    // Cores para o gráfico de pizza
    const COLORS = ['#0088FE', '#FFBB28'];

    // Grafico de velocidade

    let oneComeBack = 0
    let twoComeBack = 0
    let threeComeBack = 0
    let fourComeBack = 0
    let fiveComeBack = 0

    anoFeedbacks.forEach(feedback => {
        if (feedback.comeback === "1") {
            oneComeBack += 1
        } else if (feedback.comeback === "2") {
            twoComeBack += 1
        } else if (feedback.comeback === "3") {
            threeComeBack += 1
        } else if (feedback.comeback === "4") {
            fourComeBack += 1
        } else if (feedback.comeback === "5") {
            fiveComeBack += 1
        }
    })

    nonAnoFeedbacks.forEach(feedback => {
        console.log(feedback.comeback === "1")

        if (feedback.comeback === "1") {
            oneComeBack += 1
        } else if (feedback.comeback === "2") {
            twoComeBack += 1
        } else if (feedback.comeback === "3") {
            threeComeBack += 1
        } else if (feedback.comeback === "4") {
            fourComeBack += 1
        } else if (feedback.comeback === "5") {
            fiveComeBack += 1
        }
    })

    // data
    const dataComeBack = [
        { name: '1', value: oneComeBack },
        { name: '2', value: twoComeBack },
        { name: '3', value: threeComeBack },
        { name: '4', value: fourComeBack },
        { name: '5', value: fiveComeBack }
    ]

    console.log(dataComeBack)

    // Organizando do menor para o maior
    dataComeBack.sort((a, b) => a.value - b.value)

    // Cores para o gráfico de pizza
    const COLORSComeBack = ['#228B22', '#FFD700', '#FF8C00', '#DC143C', "#4682B4"];

    const RADIAN = Math.PI / 180;

    const cx = 150;
    const cy = 200;
    const iR = 50;
    const oR = 100;

    // Encontrar o índice da categoria com maior valor
    const maxValue = Math.max(...dataComeBack.map(item => item.value))
    const maxIndex = dataComeBack.findIndex(item => item.value === maxValue)

    // Cálculo da posição correta da agulha com base no acúmulo de proporções
    const cumulativeValue = dataComeBack.slice(0, maxIndex + 1).reduce((sum, entry) => sum + entry.value, 0);

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
        const x0 = cx;
        const y0 = cy;
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
        <V.geralContainer >
            <V.geralContent >
                <V.geralFirstContainer>
                    <V.geralFirstContent>
                        <h3>Quantidade de avaliações</h3>
                        <h2>{totalFeedbacks}</h2>
                    </V.geralFirstContent>

                    <V.geralFirstContent>
                        <h3>Média de retorno</h3>

                        <PieChart width={400} height={250}>
                            <Pie
                                dataKey="value"
                                startAngle={180}
                                endAngle={0}
                                data={dataComeBack}
                                cx={cx}
                                cy={cy}
                                innerRadius={iR}
                                outerRadius={oR}
                                fill="#8884d8"
                                stroke="none"
                            >
                                {dataComeBack.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORSComeBack[index % COLORSComeBack.length]} />
                                ))}
                            </Pie>
                            {needle(value, dataComeBack, cx, cy, iR, oR, '#d0d000')} {/* Chamando a agulha */}
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </V.geralFirstContent>
                </V.geralFirstContainer>

                <V.geralFirstContent style={{ textAlign: 'center', width: '100%' }}>
                    <h3>Anônimos vs Não Anônimos</h3>
                    <ResponsiveContainer width="100%" height={300}>
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
                </V.geralFirstContent>
            </V.geralContent>

        </V.geralContainer>
    )
}
