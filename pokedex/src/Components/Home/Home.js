import React, {useState, useEffect, useContext} from "react";
import {CardContainer, Card, ButtonContainer} from "./styled";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Contexto from "../../Contexto/Contexto";

const Home= () => {
    const [pokemon, setPokemon]= useState([]);  
    const [adicionados, adicionarPokemons]= useContext(Contexto);
    useEffect(() => pegarPokemons(), [adicionados]);
    const navigate= useNavigate();

    const pegarPokemons= () => {
        const arrayDePokemons=[];
        const pokemons= number => `https://pokeapi.co/api/v2/pokemon/${number}`
        const arrayId= [];

        adicionados.forEach(({id}) => arrayId.push(id));

        for(let i= 1; i <= 20; i++){
            
            if(!arrayId.includes(i)){

                arrayDePokemons.push(fetch(pokemons(i)).then(response => response.json()))
            }
            
        }
    
        Promise.all(arrayDePokemons)
            .then(obj => setPokemon(obj))
            .catch(error => console.log(error.response))
    };
    

    const detalhes= nome => {
        navigate(`/detalhes_do_pokemon/${nome}`)
    };

    const addNaPokedex= (obj) => {
        adicionarPokemons([...adicionados, obj]);
        pegarPokemons();
    }

    const cardsDosPokemons= pokemon.length === 0? "Carregando": pokemon
        .map((obj, index) => {
    
        return (
            <Card key={index}> 
                
                <img src={obj.sprites.front_default} alt={obj.name}/>
                
                <ButtonContainer>

                    <button onClick={() => addNaPokedex(obj)}>Adicionar</button>
                    <button onClick={() => detalhes(obj.name)}>Detalhes</button>

                </ButtonContainer>
            </Card>
        )
    });

    return(
        <>
            <Header titulo="Lista de Pokémons" button={["Ir para Pokedex"]} path={["/pokedex"]}/>
            <CardContainer>
                {cardsDosPokemons}
            </CardContainer>
        </>
    )
};

export default Home;