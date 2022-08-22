import React from "react";
import {Link} from 'react-router-dom'
import * as S from './styled'

export default function Table({Product}){
    return (
        <S.Tabela>
                <S.Thead>
                <S.Tr>
                    <S.Th>Codígo</S.Th>
                    <S.Th>Nome</S.Th>
                    <S.Th>Valor</S.Th>
                    <S.Th>Quantidade</S.Th>
                    <S.Th>Descrição</S.Th>
                    <S.Th></S.Th>
                </S.Tr>
                </S.Thead>
                <tbody>
                {Product.map((product) => {
                    return(
                    <S.Tr key={product.code}>
                        <S.TdCode>{product.code}</S.TdCode>
                        <S.TdName>{product.name}</S.TdName>
                        <S.TdValue>R$ {product.value}</S.TdValue>
                        <S.TdQuantity>{product.quantity}</S.TdQuantity>
                        <S.TdDescription>{product.description}</S.TdDescription>
                        <S.Td><Link style={{ textDecoration: 'none' }} to={`edit-product/${product.id}`}>✏️</Link></S.Td>
                    </S.Tr>
                    )
                })}
                </tbody>
            </S.Tabela>
    )
}