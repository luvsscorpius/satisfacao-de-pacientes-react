import React, { useContext } from 'react'
import { Context } from '../../Context/Context'

export const VisaoGeral = () => {
    const {allFeedbacks} = useContext(Context)

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

  return (
    <div style={{textAlign: 'center'}}>
        <h3>Quantidade de avaliações</h3>
        <h2>{totalFeedbacks}</h2>
    </div>
  )
}
