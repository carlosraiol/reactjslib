import React from 'react';
//import Button from './Button';
//Manipulando Eventos

const App = () => {

    const name = 'Digital Innovation One'

    const handleChange = (e) => {
        const { value } = e.target
        console.log(value)
    }

    const showEvent = (e) => {
        console.log('Evento Clicado');
        console.log(e);
        alert(name)
    }

    const Button = <button className='btn btn-secondary' onClick={showEvent}>Mostrar Evento</button>

    return (
        <div className='container'>
            <h3>Cloud Services</h3>
            <h4>Cadastro de Clientes</h4>
            <hr />
            <input onChange={handleChange}/>
            {Button}
        </div>
    );
};

/* Listas e Chaves
const listCustomer = [
    {
        id: 1,
        name: 'Carlos Raiol',
        skills: ['React', 'Node', 'CSS', 'Webpack']
    },
    {
        id: 2,
        name: 'Marcos Silva',
        skills: ['Html', 'Apache', 'LESS', 'Gulp']
    },
    {
        id: 3,
        name: 'Benedito Araujo',
        skills: ['Angular', 'Laravel', 'SASS', 'Gunt']
    },
    {
        id: 4,
        name: 'Rosa Foca',
        skills: ['Vue', 'Python', 'SCSS', 'Webpack']
    }
]

const App = () => {
    const renderCustomers = (customer, index) => {
        return (
            <div key={`customer-${customer.id}`}>
                <li>{customer.name}</li>
                {customer.skills.map(renderSkills)}
            </div>
        )
    }

    const renderSkills = (skill, index) => {
        return (
            <div style={{ paddingLeft: '30px' }} key={`skill-${index}`}>
                <li>{skill}</li>
            </div>
        )
    }

    return (
        <div className='container'>
            <h3>Cloud Services</h3>
            <h4>Cadastro de Clientes</h4>
            <hr />
            <div>
                <ul>
                    {listCustomer.map(renderCustomers)}
                </ul>
            </div>
        </div>
    )
}
*/
/* Renderização Condicional
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
*/
export default App;