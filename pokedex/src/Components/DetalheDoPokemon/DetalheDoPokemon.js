import React, { useEffect, useState } from "react";
import { Card, CardDetails, CardHeader, CardImg, CardSkills, CardText, ImageSlider, PokeImage } from "./styled";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Loading from "../Loading/Loading";

const DetalhesDoPokemon= () => {
    const [info, setInfo]= useState([])
    const {id}= useParams();
    useEffect(() => pegarInfoDoPokemon(), []);

    const pegarInfoDoPokemon= async () => {
        const response= await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const result= await response.json();
        setInfo([result])
    }
    
    const informacoes= info.length === 0 ? <Loading/> : info.map((obj, index) => {
        return(
            <Card key={index}>
                <CardImg>
                    <CardHeader>

                    <h1>{obj.name.charAt(0).toUpperCase() + obj.name.slice(1)}</h1>

                    <p>{obj.types.length === 1? 
                        obj.types[0].type.name.charAt(0).toUpperCase() + obj.types[0].type.name.slice(1): 
                        
                            `${obj.types[0].type.name.charAt(0).toUpperCase() + obj.types[0].type.name.slice(1)} - 
                            ${obj.types[1].type.name.charAt(0).toUpperCase() + obj.types[1].type.name.slice(1)}`
                        
                        }</p>

                    </CardHeader>
                    

                    <PokeImage>
                        <ImageSlider>
                            <img src={obj.sprites.front_default} alt="Pokemon de frente"/>
                            <img src={obj.sprites.back_default} alt="Pokemon de costa"/>
                        </ImageSlider>                        
                    </PokeImage>                    
                </CardImg>

                <CardText>

                    <CardDetails>
                        <h3>- Status</h3>
                        <p><b>HP:</b> {obj.stats[0].base_stat}</p>
                        <p><b>Attack:</b> {obj.stats[1].base_stat}</p>
                        <p><b>Defense:</b> {obj.stats[2].base_stat}</p>
                        <p><b>S-Attack:</b> {obj.stats[3].base_stat}</p>
                        <p><b>S-Defense:</b> {obj.stats[4].base_stat}</p>
                        <p><b>Speed:</b> {obj.stats[5].base_stat}</p>
                    </CardDetails>

                    <CardSkills>
                        <h3>- Habilidades</h3>

                        {obj.moves.map((ataques, indice) => {
                            return(
                                indice < 5 && <p>{ataques.move.name.charAt(0).toUpperCase() + ataques.move.name.slice(1).replace(/-/,' ')}</p>
                            )
                        })}
                        
                    </CardSkills>

                </CardText>
            </Card>
        )
    })
    
    return(
        <div>
            <Header titulo="" button={["Ir para Lista", "Ir para Pokédex"]} path={["/", "/pokedex"]} />
            {informacoes}
        </div>
    )
};

export default DetalhesDoPokemon;