import React, { useContext } from "react";
import Header from "../Header/Header";
import Contexto from "../../Contexto/Contexto";
import {Body, Card, CardContainer, ContainerButton} from "./styled";
import { useNavigate } from "react-router-dom";
import { NoPokDiv } from "../Home/styled";

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

                    <p>{obj.name.charAt(0).toUpperCase() + obj.name.slice(1)}</p>

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
        <Body>
            <Header titulo="Pokédex" button={["Ir para Lista"]} path={["/"]}/>
            <CardContainer>
                {adicionados.length == 0 ? <NoPokDiv>
                    <img src="https://media.giphy.com/media/v3kINmQVvPH4A/giphy.gif" alt="Ops, sem pokemons"/>
                    <p>Não há Pokemons adicionados</p>
                </NoPokDiv> : pokemonsAdicionados}
            </CardContainer>            
        </Body>)
};

export default Pokedex;