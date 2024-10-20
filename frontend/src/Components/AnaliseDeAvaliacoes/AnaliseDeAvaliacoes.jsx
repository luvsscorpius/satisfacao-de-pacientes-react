import React, { useContext, useState } from 'react'
import * as A from './Styles'
import { Context } from '../../Context/Context'
import { FaUser } from "react-icons/fa";
import ReactPaginate from 'react-paginate'

export const AnaliseDeAvaliacoes = () => {
    const { allFeedbacks } = useContext(Context)

    const feedbacksNaoAnonimos = allFeedbacks.nonAnonymousFeedbacks || []
    const feedbacksAnonimos = allFeedbacks.isAnonymousFeedbacks || []

    const allFeedbacksForm = [...feedbacksAnonimos, ...feedbacksNaoAnonimos]

    // Filtro 
    const [filter, setFilter] = useState('all')

    const handleFilterClick = (filterType) => {
        const selectedFilter = filterType.target.value
        setFilter(selectedFilter)
    }

    const filteredComments = allFeedbacksForm.filter((comment) => {
        if (filter === 'anonymous') return comment.isAnonymous === true;
        if (filter === 'nonAnonymous') return comment.isAnonymous === false;
        return true;
    })

    // Paginação
    const [currentPage, setCurrentPage] = useState(0)
    const itemsPerPage = 5

    // Função para quando o usuário selecionar algum item da páginação
    const handleClickPage = ({ selected }) => {
        setCurrentPage(selected)
    }

    // Logic to search
    const [search, setSearch] = useState('')
    const [foundItems, setFoundItems] = useState(filteredComments)

    // função para pesquisar algum comentário
    const handleSearch = (e) => {
        const value = e.target.value
        setSearch(value)

        // se o input estiver vazio ele colocar o founditems como o filtro estiver
        if (value === '') {
            setFoundItems(filteredComments)
        } else {
            // encontrando os itens
            // pesquisando nos feedbacks nao anonimos e por nome
            const foundItemss = feedbacksNaoAnonimos.filter(item => item.name && item.name.toLowerCase().includes(value.toLowerCase()))

            setFoundItems(foundItemss)
        }
        setCurrentPage(0)
    }

    // constante para ver se o usuário esta pesquisando ou filtrando 
    const currentData = search ? foundItems : filteredComments

    // off set é um indice que aponta para o primeiro elemento que deve ser exibido na página
    const offset = currentPage * itemsPerPage
    const currentPageData = currentData.slice(offset, offset + itemsPerPage)

    return (
        <A.mainContainer>
            <A.navContainer>
                <span>
                    <svg className="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                    <input type="search" placeholder="Search" value={search} onChange={(e) => handleSearch(e)} />
                </span>

                <span className='filters'>
                    <select value={filter} onChange={handleFilterClick}>
                        <option value="all">Todos</option>
                        <option value="anonymous">Anônimos</option>
                        <option value="nonAnonymous">Não Anônimos</option>
                    </select>
                </span>
            </A.navContainer>

            <A.commentsContainer>
                {currentPageData.map(feedback => (
                    <A.commentsContent key={feedback.id}>
                        <span>
                            <FaUser size={50} />
                        </span>

                        <div className='info' >
                            <div className="infoContent">
                                <span>
                                    <h4>Nome:</h4>
                                    <p>{feedback.isAnonymous ? 'Anônimo' : feedback.name}</p>
                                </span>
                                <span>
                                    <h4>Email:</h4>
                                    <p>{feedback.isAnonymous ? 'Anônimo' : feedback.email}</p>
                                </span>
                            </div>

                            <div className="infoContent">
                                <span>
                                    <h4>Satisfação:</h4>
                                    <p>{feedback.review}</p>
                                </span>
                                <span>
                                    <h4>Comentário:</h4>
                                    <p>{feedback.comment}</p>
                                </span>
                            </div>

                            <div className="infoContent">
                                <span>
                                    <h4>Voltária:</h4>
                                    <p>{feedback.comeback}</p>
                                </span>
                                <span>
                                    <h4>Anônimo:</h4>
                                    <p>{feedback.isAnonymous ? 'Sim' : 'Não'}</p>
                                </span>
                            </div>

                        </div>
                    </A.commentsContent>
                ))}

                <ReactPaginate
                    pageCount={Math.ceil(filteredComments.length / itemsPerPage)}
                    pageRangeDisplayed={5} // Número de páginas a serem exibidas
                    marginPagesDisplayed={2} // Número de páginas a serem exibidas nas extremidades
                    onPageChange={handleClickPage}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                    nextLinkClassName={"next"}
                    previousLinkClassName={"previous"}
                    pageClassName={"page"}
                    className='pagination' />
            </A.commentsContainer>
        </A.mainContainer >
    )
}
