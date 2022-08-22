import React from "react";
import * as S from './styled'

export default function Label({LabelFor,children}){
    return(
        <S.Label htmlFor={LabelFor} >{children}</S.Label>
    );
}