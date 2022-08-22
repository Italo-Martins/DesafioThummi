import React from "react";
import * as S from './styled'

export default function Input({Type,Name, Place,Obligatory}){

    if(Obligatory==="True"){
        return(
            <S.Input type={Type}  placeholder={Place} name={Name} required></S.Input>
        );
    }

    return(
        <S.Input type={Type}  placeholder={Place} name={Name}></S.Input>
    );
}