import React from "react";
import * as S from './styled'

export default function Header({title}){
    return(
        <S.Container>
            <S.H1>{title}</S.H1>
        </S.Container>
    );
}