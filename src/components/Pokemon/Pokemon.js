import { useParams, Link } from "react-router-dom";
import usePokemon from "./usePokemon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import Spinner from "../Spinner/Spinner";

const Pokemon = () => {
    const { name } = useParams();
    const {
        pokemon,
        error,
        onImageIn,
        onImageOut,
        touchingImage,
        loading,
    } = usePokemon(name);

    //Waiting for a response from a request
    if (loading) {
        return <Spinner />
    }

    //Pokemon not found
    if (error !== "") {
        return (
            <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-white">
                <div className="w-full h-full flex items-center justify-center ">
                    <h3>Pokemon has not been found</h3>
                </div>
            </div>
        )
    }

    return (
        <div className="mt-5 mx-auto w-4/5">
            <Link to="/" className="text-gray-900">
                <FontAwesomeIcon icon={faArrowAltCircleLeft} size="xl" />
            </Link>

            <div className="mt-10 text-5xl">
                {/* Name */}
                <h3>
                    <span className="text-yellow-500">{pokemon?.name.slice(0, pokemon?.name?.length / 2)}</span>
                    <span className="text-red-500">{pokemon?.name.slice(Math.floor(pokemon?.name?.length / 2), pokemon?.name?.length)}</span>
                </h3>

                {/* Card */}
                <div className="relative mt-20 p-5 w-full h-auto bg-white shadow-xl shadow-gray-400 rounded">
                    {/* Header */}
                    <div className="w-full h-auto flex justify-between items-center">
                        <div onMouseEnter={() => onImageIn()} onMouseLeave={() => onImageOut()} className="md:mx-0 mx-auto py-3 px-4 w-auto h-auto flex justify-center items-center bg-gray-900 rounded-full cursor-pointer">
                            <img className="w-16 h-16 object-cover" src={touchingImage ? pokemon?.sprites.back_default : pokemon?.sprites.front_default} alt={pokemon?.name} />
                            <h4 className="mt-2 text-3xl text-white">Experience {pokemon?.base_experience}</h4>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="mt-10 mr-3 w-full md:flex block justify-around items-center text-xl text-center">
                        {pokemon?.stats && pokemon?.stats.map(stat => (
                            <p key={stat?.stat?.name}>{stat?.stat?.name}: {stat?.base_stat}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pokemon;