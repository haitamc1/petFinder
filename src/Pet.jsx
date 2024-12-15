import { Link } from "react-router-dom";


export default  function Pet( { name, animal, breed, location, id, images } ){
    let image = 'http://pets-images.dev-apis.com/pets/none.jpg';

    if (images.length)
        image = images[0];

    return (
        <Link to={`/details/${id}`} className="pet">
            <div className="image-container">
                <img src={image} alt={name}/>
            </div>
            <div className="info">
                <h1>{name}</h1>
                <h2>{animal} - {breed} - {location}</h2>
            </div>
        </ Link>
    )
}