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

    const tirarPokemon = (pokeNome) => {
        const pokemon = adicionados.filter((poke) => {
                return  poke.name === pokeNome
            })[0]

            const indicePokemon = adicionados.indexOf(pokemon)
            const novoPokedex = [...adicionados]
            novoPokedex.splice(indicePokemon, 1)
            adicionarPokemons(novoPokedex)
    }

    const pokemonsAdicionados=adicionados.map(obj =>{
        return(
            <div>
                <Card>
                    <img src={obj.sprites.front_default} alt={obj.name}/>
                    <ContainerButton>
                        <button onClick={() => tirarPokemon(obj.name)}>Remover da <br/>Pokédex</button>
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