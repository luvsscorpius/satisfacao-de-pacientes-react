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

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <V.geralContent >
                <div style={{ textAlign: 'center', width: '100%', height: '100%' }}>
                    <h3>Quantidade de avaliações</h3>
                    <h2>{totalFeedbacks}</h2>
                </div>

                <div style={{ textAlign: 'center', width: '100%' }}>
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
                </div>
            </V.geralContent>

        </div>
    )
}
