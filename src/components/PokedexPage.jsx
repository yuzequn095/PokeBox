import { useEffect, useState } from "react";
import { fetchPokemons } from '../server/services.js';
import '../css/PokedexPage.css';
import PokemonObject from './PokemonObject';

function PokedexPage() {

    const [pokemons, setPokemons] = useState();
    const [error, setError] = useState();
    const [fetchUrl, setFetchUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');
    const [preUrl, setPreUrl] = useState();
    const [nextUrl, setNextUrl] = useState();
    const [isLoading, setIsLoading] = useState(true);


    useEffect(
        () => {
            fetchPokemons(fetchUrl)
            .then( loadedPokemon => {
                setPokemons(loadedPokemon);
                setPreUrl(loadedPokemon.previous);
                setNextUrl(loadedPokemon.next);
                setIsLoading(false);
            })
            .catch( error => {
                setError('Oops! Something is wrong...');
            });
        },
        [fetchUrl]
    );

    return (
        <>
            <div>{!pokemons && error}</div>
            { isLoading && <div className="loading__indicator"><i className="gg-spinner"></i></div>}
            {!isLoading && pokemons &&
                <div className="pokemon__list"> 
                {pokemons.results.map( pokemon => {
                    return (
                        <li key={pokemon.name} className="polemon__list"><PokemonObject pokemonName = {pokemon.name} pokemonUrl = {pokemon.url}/></li>
                    );
                })}
                </div>
            }
            <button className="dex__button" onClick={() => {setIsLoading(true); setFetchUrl(preUrl)}} disabled={!preUrl}>Previous</button>
            <button className="dex__button" onClick={() => {setIsLoading(true); setFetchUrl(nextUrl)}}>Next</button>
        </>
    );
}

export default PokedexPage;