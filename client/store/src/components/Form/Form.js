import React from "react";
import * as S from './styled'

export default function Form({Type,Function,children}){
    return(
        <S.Form action={Type} onSubmit={Function}>
            {children}
        </S.Form>
    );
}