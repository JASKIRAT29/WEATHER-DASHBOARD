// Set variables, including Open Weather Maps API Key
var owmAPI = "5506c44506be62eccd4d42f0df9bdafa";
var currentCity = "";
var lastCity = "";

// var handle for fethching
var handleErrors = (response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}