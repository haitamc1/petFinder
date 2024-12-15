import Pet from "./Pet";

export default function Results({pets}){

    if (pets === undefined)
        return (
            <h1>No Pets Found!</h1>
        );
    // console.log(pets);
    return (
        <div className="search">
            {pets.map((pet) => {
                    return (
                        <Pet
                            animal={pet.animal}
                            breed={pet.breed}
                            location={`${pet.city}, ${pet.state}`}
                            id={pet.id}
                            images={pet.images}
                            key={pet.id}
                            name={pet.name}
                        />
                    );
                }
            )}
        </div>
    );
}