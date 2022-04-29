import { fetchSinglePokemon } from '../server/services.js';
import { useEffect, useState } from "react";
import '../css/PokemonObject.css';

function PokemonObject({pokemonName, pokemonUrl}){

    const[pokemonData, setPokemonData] = useState();
    const[isLoading, setIsLoading] = useState(true);
    const[error, setError] = useState();

    useEffect(
        () => {
            fetchSinglePokemon(pokemonUrl)
            .then( singlePokemon => {
                setPokemonData(singlePokemon);
                setIsLoading(false);
            })
            .catch( error => {
                setError('Oops! Something is wrong...');
            });
        },
        []
    );

    return(
        <>
            { isLoading && <div className="loading__indicator"><i class="gg-loadbar-sound"></i></div>}
            { !isLoading && 
                <div className={`pokemon__container ${pokemonData.types[0].type.name}`}>
                    <div><p>#0{pokemonData.id}</p></div>
                    <img src={pokemonData.sprites.other.dream_world.front_default} alt="pokemon"/>
                    <div>
                        <h3>{pokemonData.name}</h3>
                        <p>Type: {pokemonData.types[0].type.name}</p>
                    </div>
                </div>
            }
        </>
    );
}

export default PokemonObject;