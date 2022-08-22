import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import Container from '../../components/Container/Container'
import Header from '../../components/Header/Header'
import Button from '../../components/Button/Button'
import PageButton from '../../components/Button/PageButton'
import DivButton from '../../components/DivButton/DivButton'
import Table from '../../components/Table/Table'


import api from '../../Services/api'

const Produts = () => {
    
    const [products, setproduts] = useState([])
    const productsPages= 5
    const [currentPages, setcurrentPages] = useState(0)

    const pages = Math.ceil(products.length/productsPages)
    const startProduct = currentPages * productsPages
    const endProduct = startProduct + productsPages
    const currentProduct = products.slice(startProduct, endProduct)

    useEffect(() => {
        api.get('product/').then(response => {
            setproduts(response.data)
        })
    }, [])

    return(
        <>
        <Header title="Produtos"/>
        <Container>
            <Table Product={currentProduct}></Table>
            <DivButton>
            {/* {Array.from(Array(pages), (item, index) => {
            return(
                <button
                value={index} 
                key={index} 
                onClick={(e) => {setcurrentPages(Number(e.target.value))}}
                >{index}</button>
            )
        })} */}
                <PageButton Page={pages} Set={setcurrentPages} CurrentPage={currentPages}/>
            </DivButton>
        </Container>
        <DivButton>
            <Link to='/new-product'><Button>Novo Produto</Button></Link>
            <Link to='/best-product'><Button>Produtos mais Caros</Button></Link>
            <Link to='/invetory-product'><Button>Produtos com maior Estoque</Button></Link>
        </DivButton>
        </>
    )
}

export default Produts