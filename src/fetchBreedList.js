const fetchBreedList = async ({queryKey}) => {
    const animal = queryKey[1];

    if (!animal) return [];

    const apiResp = await fetch (`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);

    // reactQuery wants u to return an error in case of failure 

    if (!apiResp.ok)
        throw new Error (`breeds/${animal} fetch failed`);

    return apiResp.json(); 
}

// not awaiting for json since reactQuery expects u to return a promise

export default fetchBreedList;