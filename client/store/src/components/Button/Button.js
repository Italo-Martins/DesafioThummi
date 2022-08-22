import React from "react";
import * as S from './styled'

export default function Button({children}){
    return(
            <S.Button type="button" >{children}</S.Button>
    );
}