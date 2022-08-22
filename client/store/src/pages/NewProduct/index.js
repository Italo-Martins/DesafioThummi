import React, {useState, useEffect} from 'react';
import { useNavigate, Link } from "react-router-dom";

import Container from '../../components/Container/Container'
import Header from '../../components/Header/Header'
import Label  from '../../components/Label/Label'
import Input from '../../components/Input/Input'
import Text from '../../components/Text/Text'
import Form from '../../components/Form/Form'
import InputButton from '../../components/InputButton/InputButton'
import DivButton from '../../components/DivButton/DivButton'
import Button from '../../components/Button/Button'

import api from '../../Services/api';



const NewProduct = () => {

    const [ ,setproduts] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        api.get('product').then(response => {
            setproduts(response.data)
        })
    }, [])

    async function handleSubmit(event){
        
        event.preventDefault();
        const formData = new FormData(event.target);
        const Data = Object.fromEntries(formData);
        const product = {
            name: Data.name, 
            value: Number(Data.value), 
            quantity: Number(Data.quantity), 
            code: Number(Data.code), 
            description: Data.description
        }
        await api.post('/createproduct', product);
        navigate("/")
        
    }

    return(
        <>
        <Header title="Cadastro de Produtos"/>
        <Container>
            <Form Type="post" Function={handleSubmit}>
                <Label LabelFor="codigo">Codigo:</Label>
                <br />
                <Input Type="number" Place="Codígo do Produto" Name="code" Obligatory="True" />
                <br />
                <Label LabelFor="name">Nome:</Label>
                <br />
                <Input Type="text" Place="Nome do Produto" Name="name" Obligatory="True"/>
                <br />
                <Label LabelFor="valor">Valor (R$):</Label><br />
                <Input Type="number" Place="Valor do Produto" Name="value" Obligatory="True"/>
                <br />
                <Label LabelFor="valor">Quantidade:</Label>
                <br />
                <Input Type="number" Place="Quantidade em Estoque" Name="quantity" Obligatory="True"/>
                <br />
                <Label LabelFor="descricao">Descrição:</Label>
                <br />
                <Text Name="description" Place="Descrição do Produto" ></Text>
                <br />
                <InputButton type="submit" value="Salvar"></InputButton>
            </Form>
        </Container>
        <DivButton>
            <Link to='/'><Button>Produtos</Button></Link>
        </DivButton>
        </>
    )
}

export default NewProduct