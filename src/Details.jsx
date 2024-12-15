import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import fetchPet from "./fetchPet"

export default function Details(){
    const { id } = useParams();

    // not waiting on useQuery since it's a render function
    // as soon as fetchPet is done it's gonna go rerender
    // that's why we can return 

    const results = useQuery(["details", id], fetchPet);

    // details represent the caching key
    // useQuery works as in if u don't have details/{whatever id}
    // execute fetchPet with the appropriate id

    //as long as the caching key and id hasn't changed it's gonne be
    // in the cache so no need to refetch
    
    if (results.isError){
        // tries to refetch 3 times then shows the error returned
        return (
            <h2>Oh Nooooo, some issue has risen :/ </h2>
        )
    }
    
    if (results.isLoading){
        return (
            <h2 className="loader">
                Please Wait Momentarly
            </h2>
        )
    }
    
    const pet = results.data.pets[0];

    return (
        <div className="details">
            <div>
                <h1>{pet.name}</h1>
                <img src={pet.images} alt={pet.name}/>
                <h2>
                    {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
                    <button>Adopt {pet.name}</button>
                    <p>{pet.description}</p>
                </h2>
            </div>
        </div>
    )
}