import React from 'react';
import Button from './Button';

const hasCustomer = true

const App = () => {

    const customer = 'Carlos Raiol'

    const showCustomer = () => {

        if (!hasCustomer) return null
        
        return (
            <div>
                <h3>Nome do Cliente: {customer}</h3>
            </div>
        )

    }

    return (
        <div className='container-fluid'>
            <h2>Cloud Services</h2>
            <h3>Cadastro de Clientes</h3>
            <hr />
            {hasCustomer ? Button.historyCustomer() : Button.addCustomer()}
            <div>{showCustomer()}</div>
        </div>
    );

};
export default App;