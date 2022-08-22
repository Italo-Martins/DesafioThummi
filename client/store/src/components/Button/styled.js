import styled from "styled-components";

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    float:left;
    width: 110px;
    height: 50px;
    margin: 0 15px;
    background-color: #0a6bff;
    border-radius: 4px;
    border: 0;
    color: #fff;
    cursor: pointer;
    display: inherit;
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
    text-align: center;
    box-sizing: border-box;
    box-shadow: rgba(1,60,136,.5) 0 -1px 3px 0 inset,rgba(0,44,97,.1) 0 3px 6px 0;
`
export const PageButton = styled.button`
    width: 20px;
    padding: 2px;
    margin: 2px;
    border-style: none;
    border-radius: 6px;
    background: #fff;
    color: #0a6bff;

    &:hover{
        background: #0a6bff;
        color: #fff;
    }
`