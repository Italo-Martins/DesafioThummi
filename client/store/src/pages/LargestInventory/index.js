import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import Container from '../../components/Container/Container'
import Header from '../../components/Header/Header'
import Button from '../../components/Button/Button'
import DivButton from '../../components/DivButton/DivButton'
import Table from '../../components/Table/Table'



import api from '../../Services/api'

const LargestInventory = () => {
    
    const [products, setproduts] = useState([])

    useEffect(() => {
        api.get('product/?best=false').then(response => {
            setproduts(response.data)
        })
    }, [])

    return(
        <>
        <Header title="Três Produtos Com Maior Estoque"/>
        <Container>
            <Table Product={products}></Table>
        </Container>
        <DivButton>
            <Link to='/new-product'><Button>Novo Produto</Button></Link>
            <Link to='/'><Button>Produtos</Button></Link>
            <Link to='/best-product'><Button>Produtos mais Caros</Button></Link>
        </DivButton>
        </>
    )
}

export default LargestInventory