import { useEffect, useState } from "react";
import axios from "axios";

const usePokemonList = () => {
    const [pokemon, setPokemon] = useState([]);
    const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon");
    const [nextPageUrl, setNextPageUrl] = useState("");
    const [prevPageUrl, setPrevPageUrl] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const abortPokemon = new AbortController();

        axios.get(currentPageUrl, { signal: abortPokemon.signal })
            .then(res => {
                setPrevPageUrl(res.data.previous);
                setNextPageUrl(res.data.next);
                setPokemon(res.data.results);
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
                throw new Error(error);
            });

        return () => {
            setLoading(false);
            abortPokemon.abort();
        }
    }, [currentPageUrl])

    const goToPrevPage = () => {
        setCurrentPageUrl(prevPageUrl);
    }

    const goToNextPage = () => {
        setCurrentPageUrl(nextPageUrl);
    }

    return { pokemon, goToPrevPage, goToNextPage, prevPageUrl, nextPageUrl, loading };
}

export default usePokemonList;