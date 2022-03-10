import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";

const DetalhesDoPokemon= () => {
    const [info, setInfo]= useState([])
    const {id}= useParams();
    useEffect(() => pegarInfoDoPokemon(), []);

    const pegarInfoDoPokemon= async () => {
        const response= await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const result= await response.json();
        setInfo([result])
    }
    
    const informacoes= info.length === 0 ?"Carregando...": info.map((obj, index) => {
        return(
            <div key={index}>
                <div>
                    <img src={obj.sprites.front_default} alt="Pokemon de frente"/>

                    <img src={obj.sprites.back_default} alt="Pokemon de costa"/>
                </div>
                
                <div>
                    <h1>Poderes</h1>

                    <h3>hp: {obj.stats[0].base_stat}</h3>
                    <h3>attack: {obj.stats[1].base_stat}</h3>
                    <h3>defense: {obj.stats[2].base_stat}</h3>
                    <h3>special-attack: {obj.stats[3].base_stat}</h3>
                    <h3>special-defense: {obj.stats[4].base_stat}</h3>
                    <h3>speed: {obj.stats[5].base_stat}</h3>


                </div> 

                <div>
                    
                    <h1>Espécie</h1>
                    <h3>{obj.types.length === 1? 
                        obj.types[0].type.name: 
                        
                            `${obj.types[0].type.name} - ${obj.types[1].type.name}`
                        
                        }</h3>
                    
                </div>

                <div>
                    <h1>Principais ataques</h1>

                    {obj.moves.map((ataques, indice) => {
                        return(
                            <h3 key={indice}>{ataques.move.name}</h3>
                        )
                    })}
                    
                </div>
            </div>
        )
    })
    
    return(
        <div>
            <Header titulo="" button={["Voltar", "Ir para Pokédex"]} path={["/", "/pokedex"]}/>
            {informacoes}
        </div>
    )
};

export default DetalhesDoPokemon;
