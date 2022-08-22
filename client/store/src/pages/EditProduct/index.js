import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import Container from '../../components/Container/Container'
import Header from '../../components/Header/Header'
import Label from '../../components/Label/Label'
import Input from '../../components/Input/Input'
import Text from '../../components/Text/Text'
import Form from '../../components/Form/Form'
import InputButton from '../../components/InputButton/InputButton'
import DivButton from '../../components/DivButton/DivButton'
import Button from '../../components/Button/Button';

import api from '../../Services/api';


const EditProduct = () => {

    const navigate = useNavigate();
    const {id} = useParams();

    async function handleSubmit (event){
        event.preventDefault();
        const formData = new FormData(event.target);
        const Data = Object.fromEntries(formData);

        await api.put(`/editproduct/${id}`, Data);
        navigate("/")
    }

    return(
        <>
        <Header title="Editar Produto"/>
        <Container>
            <Form Type="post" Function={handleSubmit}>
                <Label LabelFor="codigo">Codigo:</Label><br />
                <Input Type="number" Place="Codígo do Produto" Name="code" />
                <br />
                <Label LabelFor="name">Nome:</Label><br />
                <Input Type="text" Place="Nome do Produto" Name="name" />
                <br />
                <Label LabelFor="descricao">Descrição:</Label>
                <br />
                <Text name="description" cols="25" rows="5" placeholder="Descrição do Produto" ></Text>
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

export default EditProduct