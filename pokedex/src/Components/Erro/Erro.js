import React from "react";
import Header from "../Header/Header";
import { BodyErro, ErroCard } from "./styled";

const Erro= () => {
    return(<BodyErro>
        <Header titulo="" button={["Ir para Lista", "Ir para Pokédex"]} path={["/", "/pokedex"]} />
        <ErroCard>
            <p>Página não encontrada</p>
            <img src="https://media.giphy.com/media/27wc7vMWPvvJC/giphy.gif" alt="Página não encontrada"/>            
        </ErroCard>        
    </BodyErro>)
};

export default Erro;