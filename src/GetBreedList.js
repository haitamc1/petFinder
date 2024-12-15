import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";


export default function GetBreeds(animal){
    const result = useQuery(["breeds", animal], fetchBreedList);
    return ([result?.data?.breeds ?? [], result.status]);

}