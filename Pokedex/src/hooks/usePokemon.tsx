import {useEffect, useState} from 'react'
import { pokemonApi } from '../api/PokemonApi'
import { PokemonFull } from '../interfaces/pokemonInterfaces'

const usePokemon = ( id: string ) => {

    const [isLoading, setIsLoading] = useState(true)
    const [pokemon, setPokemon] = useState<PokemonFull>({} as PokemonFull)

    const loadPokemon = async () => {
        const resp = await pokemonApi.get(`https://pokeapi.co/api/v2/pokemon/${ id }`);
        setPokemon( resp.data);
        setIsLoading(false);
    }

    useEffect(() => {
        loadPokemon();
    }, [])

    return {
        isLoading,
        pokemon
    }
}

export default usePokemon
