import styled from "styled-components";


export const Tabela = styled.table`
    table-layout: auto;
    width: 100%;
    border-spacing: 0;
    margin:10px;
    background-color: #F5F5F5;
    font-family:Arial, Helvetica, sans-serif;
`
export const Thead = styled.thead`
    background-color: #0000CD;
    border-spacing: 0px;
`

export const Th = styled.th`
    color: white;
    margin: 30px 0 30px 0;
    border-bottom: 1px solid;
    padding: 5px 0  5px 0;

`

export const Tr = styled.tr`
    text-align:center;
    &:nth-child(even){
        background-color:#6495ED;
    }
`

export const Td = styled.td`
    text-align: center;
    max-width: 100px;
    padding: 0.5em;
    word-break: break-all;
    &:last-child{
        background-color:#F5F5F5;
    }
`

export const TdCode = styled.td`
    text-align: center;
    max-width: 10%;
    padding: 0.5em;
    word-break: break-all;
    &:last-child{
        background-color:#F5F5F5;
    }
`

export const TdValue = styled.td`
    text-align: center;
    max-width: 10%;
    padding: 0.5em;
    word-break: break-all;
    &:last-child{
        background-color:#F5F5F5;
    }
`

export const TdQuantity = styled.td`
    text-align: center;
    max-width: 20;
    padding: 0.5em;
    word-break: break-all;
    &:last-child{
        background-color:#F5F5F5;
    }
`

export const TdDescription = styled.td`
    text-align: center;
    max-width: auto;
    padding: 0.5em;
    word-break: break-all;
    &:last-child{
        background-color:#F5F5F5;
    }
`

export const TdName = styled.td`
    text-align: center;
    max-width: 100px;
    padding: 0.5em;
    word-break: break-all;
    &:last-child{
        background-color:#F5F5F5;
    }
`

export const DivButton = styled.div`
    position: relative;
    margin: 10px auto;
`