import { useEffect, useState } from "react";
import axios from "axios";

const usePokemon = (name) => {
    const [pokemon, setPokemon] = useState(null);
    const [error, setError] = useState("");
    const [touchingImage, setTouchingImage] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const abortPokemon = new AbortController();

        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`, { signal: abortPokemon.signal })
            .then(res => {
                setPokemon(res.data);
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
                const { status } = error.response;
                if (status === 404) setError("Sorry character not found");
                throw new Error(error);
            })

        return () => {
            setLoading(false);
            abortPokemon.abort();
        }
    }, [name])

    const onImageIn = () => {
        setTouchingImage(true);
    }

    const onImageOut = () => {
        setTouchingImage(false);
    }

    return { pokemon, error, onImageIn, onImageOut, touchingImage, loading };
}

export default usePokemon;