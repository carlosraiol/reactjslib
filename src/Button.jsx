import React from 'react'

const btnHistoryCustomer = <button className='btn btn-primary'>Histórico dos Clientes</button>
const btnAddCustomer = <button className='btn btn-success'>Cadastrar Cliente</button>

const historyCustomer = () => {

    const renderShowHistory = () => (
        <div>
            Clique no botão para visualizar o histórico dos clientes
            <br />
            {btnHistoryCustomer}
        </div>
    )

    return (
        renderShowHistory()
    )
}

const addCustomer = () => {

    const renderAddCustomer = () => (
        <div>
            Clique no botão para visualizar o histórico dos clientes
            <br />
            {btnAddCustomer}
        </div>
    )

    return (
        renderAddCustomer()
    )
}

export default { 
    historyCustomer, 
    addCustomer 
}