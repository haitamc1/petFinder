import { useState } from "react";
import GetBreeds from "./GetBreedList";
import Results from "./Results";
import fetchSearch from "./fetchSearch";
import { useQuery } from "@tanstack/react-query";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

export default function SearchParams(){
    const [animal, setAnimal] = useState("");
    const [breeds] = GetBreeds(animal);
    const [requestParams, setRequestParams] = useState({
        location: "",
        animal: "",
        breed: "",
    });

    
    const res = useQuery(["search", requestParams], fetchSearch);
    const pets = res?.data?.pets ?? [];

    return (
        <div className="search-params">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    // a browser api where u can feed it a form and it pulls out
                    // the date from the form for u into an object
                    const formData = new FormData(e.target);
                    const obj = {
                        animal: formData.get("animal") ?? "",
                        breed: formData.get("breed") ?? "",
                        location: formData.get("location") ?? "",
                    }
                    setRequestParams(obj);
                }}
            >
                <label htmlFor="location">
                    Location
                    <input
                        id="location"
                        name="location"
                        placeholder="Location"
                    />
                </label>

                <label htmlFor="animal">
                    Animal
                    <select 
                        id="animal"
                        value={animal}
                        onChange={(e) => {
                            setAnimal(e.target.value);
                        }}
                    >
                        <option />
                        {ANIMALS.map((animal) =>
                        <option key={animal} value={animal}>{animal}</option>
                        )}
                    </select>
                </label>

                <label htmlFor="breed">
                    Breed
                    <select 
                        id="breed"
                        disabled={!breeds.length}
                        name="breed"
                    >
                        <option />
                        {breeds.map((breed) =>
                        <option key={breed} value={breed}>{breed}</option>
                        )}
                    </select>
                </label>

                <button>Submit</button>
            </form>
            <Results pets={pets} />
        </div>
    )
}