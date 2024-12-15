const fetchPet = async ({queryKey}) => {
    const id = queryKey[1];

    const apiResp = await fetch (`http://pets-v2.dev-apis.com/pets?id=${id}`);

    // reactQuery wants u to return an error in case of failure 

    if (!apiResp.ok)
        throw new Error (`details/${id} fetch failed`);

    return apiResp.json(); 
}

// not awaiting for json since reactQuery expects u to return a promise

export default fetchPet;