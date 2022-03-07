import React, {useState, useEffect} from "react";
import axios from "axios";

const Home= () => {
    const [pokemon, setPokemon]= useState([]);

    useEffect(() => pegarPokemons(), []);

    const pegarPokemons= () => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon/")
            .then(response => setPokemon(response.data.results))
            .catch(error => console.log(error.response))
    };

    const cardsDosPokemons= pokemon.length && pokemon.map((obj, index) => (<div key={index}>{obj.name}</div>))
    
    return(
        <div>
            {cardsDosPokemons}
        </div>
    )
};

export default Home;