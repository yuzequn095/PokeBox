function PokemonCard({data}){
    return (
        <div>
            <div><p>#0{data.id}</p></div>
            <img src={data.sprites.other.dream_world.front_default} alt="pokemon"/>
            <div>
                <h3>{data.name}</h3>
                <p>Type: {data.types[0].type.name}</p>
            </div>
        </div>
    );
}

export default PokemonCard;