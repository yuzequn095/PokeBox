import { useEffect, useState } from "react";
import '../css/TeamPage.css';
import { fetchSinglePokemon } from '../server/services.js';
import PokemonCard from './PokemonCard';

function TeamPage(){

    const [pokemonName, setPokemonName] = useState();
    const [specificPokemon, setSpecificPokemon] = useState({});
    const [id, setId] = useState();
    const [error, setError] = useState();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;


    function handleSubmit(e) {
        e.preventDefault();
        const submitInfo = e.target.elements;
        setPokemonName(submitInfo[0].value);
    }

    useEffect(
        () => {
            fetchSinglePokemon(url)
            .then( singlePokemon => {
                setSpecificPokemon({
                    ...specificPokemon,
                    [id]: singlePokemon,
                });
            })
            .catch( error => {
                setError('If loading time last more than 10 seconds, please search other Pokémon and check spell.');
            });
        },
        [pokemonName]
    );

    return(
        <div>
            <div>
                <h3>Build Your Team Here</h3>
                <p>Please don't add new Pokémon until finish previous loading...</p>
            </div>
            
            <div className="team__card">
                <div className="team__pokemon">
                    {/* if current card fetch not trigerred */}
                    {!specificPokemon[1] && id !== 1 &&
                    <div>
                        <h3>Pokemon1</h3>
                        <form onSubmit={(e) => {handleSubmit(e); setId(1)}}>
                            <input placeholder='Please enter Pokémon id from 1 to 386 here (*required)' type="number" min="1" max="386" required></input>
                            <button type="submit"> + </button>
                        </form>
                    </div>
                    }
                    {/* if current card fetch trigerred but not finish */}
                    {!specificPokemon[1] && id === 1 && <div className="loading__indicator"><i class="gg-spinner-two-alt"></i></div>}
                    {/* if current card fetch trigerred and finish */}
                    {specificPokemon[1] && 
                    <PokemonCard data={specificPokemon[1]}/>
                    }
                </div>

                <div className="team__pokemon">
                {!specificPokemon[2] && id !== 2 &&
                    <div>
                        <h3>Pokemon2</h3>
                        <form onSubmit={(e) => {handleSubmit(e); setId(2)}}>
                            <input placeholder='Please enter Pokémon id from 1 to 386 here (*required)' type="number" min="1" max="386" required></input>
                            <button type="submit"> + </button>
                        </form>
                    </div>
                    }
                    {!specificPokemon[2] && id === 2 && <div className="loading__indicator"><i class="gg-spinner-two-alt"></i></div>}
                    {specificPokemon[2] && 
                    <PokemonCard data={specificPokemon[2]}/>
                    }
                </div>

                <div className="team__pokemon">
                {!specificPokemon[3] && id !== 3 &&
                    <div>
                        <h3>Pokemon3</h3>
                        <form onSubmit={(e) => {handleSubmit(e); setId(3)}}>
                            <input placeholder='Please enter Pokémon id from 1 to 386 here (*required)' type="number" min="1" max="386" required></input>
                            <button type="submit"> + </button>
                        </form>
                    </div>
                    }
                    {!specificPokemon[3] && id === 3 && <div className="loading__indicator"><i class="gg-spinner-two-alt"></i></div>}
                    {specificPokemon[3] && 
                    <PokemonCard data={specificPokemon[3]}/>
                    }  
                </div>
                
                <div className="team__pokemon">
                {!specificPokemon[4] && id !== 4 &&
                    <div>
                        <h3>Pokemon4</h3>
                        <form onSubmit={(e) => {handleSubmit(e); setId(4)}}>
                            <input placeholder='Please enter Pokémon id from 1 to 386 here (*required)' type="number" min="1" max="386" required></input>
                            <button type="submit"> + </button>
                        </form>
                    </div>
                    }
                    {!specificPokemon[4] && id === 4 && <div className="loading__indicator"><i class="gg-spinner-two-alt"></i></div>}
                    {specificPokemon[4] && 
                    <PokemonCard data={specificPokemon[4]}/>
                    }
                </div>

                <div className="team__pokemon">
                {!specificPokemon[5] && id !== 5 &&
                    <div>
                        <h3>Pokemon5</h3>
                        <form onSubmit={(e) => {handleSubmit(e); setId(5)}}>
                            <input placeholder='Please enter Pokémon id from 1 to 386 here (*required)' type="number" min="1" max="386" required></input>
                            <button type="submit"> + </button>
                        </form>
                    </div>
                    }
                    {!specificPokemon[5] && id === 5 && <div className="loading__indicator"><i class="gg-spinner-two-alt"></i></div>}
                    {specificPokemon[5] && 
                    <PokemonCard data={specificPokemon[5]}/>
                    }
                </div>

                <div className="team__pokemon">
                {!specificPokemon[6] && id !== 6 &&
                    <div>
                        <h3>Pokemon6</h3>
                        <form onSubmit={(e) => {handleSubmit(e); setId(6)}}>
                            <input placeholder='Please enter Pokémon id from 1 to 386 here (*required)' type="number" min="1" max="386" required></input>
                            <button type="submit"> + </button>
                        </form>
                    </div>
                    }
                    {!specificPokemon[6] && id === 6 && <div className="loading__indicator"><i class="gg-spinner-two-alt"></i></div>}
                    {specificPokemon[6] && 
                    <PokemonCard data={specificPokemon[6]}/>
                    }
                </div>
            </div>
        </div> 
    );
}

export default TeamPage;