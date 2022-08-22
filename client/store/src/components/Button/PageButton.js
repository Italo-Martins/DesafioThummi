import React from "react";
import * as S from './styled'

const PageButton = ({Page, Set, CurrentPage}) =>{
    return(
        <>
        {Array.from(Array(Page), (item, index) => {
            return(
                <S.PageButton
                style={index===CurrentPage ? {background: "#0a6bff", color: "#fff"}: null}
                value={index} 
                key={index} 
                onClick={(e) => {Set(Number(e.target.value))}}
                >{index+1}</S.PageButton>
            )
        })}
        </>
    );
}

export default PageButton;