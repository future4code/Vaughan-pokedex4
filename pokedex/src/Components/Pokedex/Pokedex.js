import React, { useContext } from "react";
import Header from "../Header/Header";
import Contexto from "../../Contexto/Contexto";
import {Card, ContainerButton} from "./styled";
import { useNavigate } from "react-router-dom";

const Pokedex= props => {
    const [adicionados, adicionarPokemons]= useContext(Contexto);
    const navigate= useNavigate();

    const detalhes= name => {
        navigate(`/detalhes_do_pokemon/${name}`)
    }

    const pokemonsAdicionados=adicionados.map(obj =>{
        return(
            <div>
                <Card>
                    <img src={obj.sprites.front_default} alt={obj.name}/>
                    <ContainerButton>
                        <button>Remover da <br/>Pokédex</button>
                        <button onClick={() => detalhes(obj.name)}>Ver detalhes</button>
                    </ContainerButton>
                </Card>
            </div>
        )
    });

    return(
        <div>
            <Header titulo="Pokédex" button={["Voltar para lista de pokémons"]} path={["/"]}/>
            {pokemonsAdicionados}
        </div>)
};

export default Pokedex;