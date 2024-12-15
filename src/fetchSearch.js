const fetchSearch = async ({queryKey}) => {
    const {location, breed, animal} = queryKey[1];

    const res = await fetch(
        `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
      );
    
    if (!res.ok)
        throw new Error (
            `Pet search ${animal}, ${breed}, ${location} failed`
        );

    return res.json(); 
}

export default fetchSearch;