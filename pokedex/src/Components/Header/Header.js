import React from "react";
import {Li, ButtonList, HeaderBody} from "./styled";
import { useNavigate } from "react-router-dom";

const Header= (props) => {
    const navigate=useNavigate();

    const navegar= path => {
        navigate(path);
    }
    
    return(
        <HeaderBody>
            <h1>{props.titulo}</h1>
            <ButtonList>
                {props.button.map((texto, index) => {
                    return (<Li onClick={() => navegar(props.path[index])} key={index}>{texto}</Li>)
                })}
            </ButtonList>
        </HeaderBody>
    )
};


export default Header;