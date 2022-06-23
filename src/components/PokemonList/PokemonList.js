import { Link } from "react-router-dom";
import usePokemonList from "./usePokemonList";
import Pagination from "../Pagination/Pagination";
import Spinner from "../Spinner/Spinner";

const PokemonList = () => {
    const {
        pokemon,
        goToPrevPage,
        goToNextPage,
        prevPageUrl,
        nextPageUrl,
        loading,
    } = usePokemonList();

    //Waiting for a response from a request
    if (loading) {
        return <Spinner />
    }

    return (
        <div className="mx-auto w-4/5">
            <Pagination
                goToPrevPage={prevPageUrl ? goToPrevPage : null}
                goToNextPage={nextPageUrl ? goToNextPage : null}
            />

            {pokemon.length > 0 ? pokemon.map(p => (
                <div key={p.name} className="my-10 mx-auto w-4/5 p-5 bg-gradient-to-b from-red-600 to-red-700 text-white shadow-md shadow-gray-400 rounded">
                    <Link to={`/${p.name}`}>
                        <h3>{p.name}</h3>
                    </Link>
                </div>
            )) : <div>No Pokemon</div>}

            <Pagination
                goToPrevPage={prevPageUrl ? goToPrevPage : null}
                goToNextPage={nextPageUrl ? goToNextPage : null}
            />
        </div>
    )
}

export default PokemonList;