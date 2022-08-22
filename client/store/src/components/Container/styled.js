import styled from "styled-components";

export const Container = styled.div`
    width: 800px;
    display: flex;
    flex-wrap: wrap;
    margin: 30px auto 0px auto;
    align-items: center;
    justify-content: center;
    border: solid 2px;
    background-color: white;
    border-radius: 10px;
    box-sizing: border-box;
    
    @media (max-width:800px){
        width: 100%;
    }

`;