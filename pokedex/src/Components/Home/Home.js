import React, {useState, useEffect} from "react";
import axios from "axios";
import {CardContainer, Card, ButtonContainer} from "./styled";

const Home= () => {
    const [pokemon, setPokemon]= useState([]);

    useEffect(() => pegarPokemons(), []);

    const pegarPokemons= () => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon/")
            .then(response => setPokemon(response.data.results))
            .catch(error => console.log(error.response))
    };

    const cardsDosPokemons= pokemon.length && pokemon.map((obj, index) => {
    
        return (
            <Card key={index}> 
                
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}/>
                <ButtonContainer>

                    <button>Adicionar</button>
                    <button>Detalhes</button>

                </ButtonContainer>
            </Card>
        )
    });

    return(
        <CardContainer>
            {cardsDosPokemons}
        </CardContainer>
    )
};

export default Home;