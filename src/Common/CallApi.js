const CallApi = async (token, url, editProfileBody) => {
    console.log("url", url);
    console.log("tokeccccn", token);
    console.log("tokeccccn", editProfileBody);
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": token,
            },
            body: JSON.stringify(editProfileBody)
        })
        var data = await response.json();
        console.log("mydata", data);
        return data;
    }
    catch (e) {
        console.log(e)
    }

}
export { CallApi }