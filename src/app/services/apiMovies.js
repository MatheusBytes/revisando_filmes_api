const { default: axios } = require("axios");

const apiMovie = axios.create({
    baseURL:'https://api.themoviedb.org/3',
    params:{
        language:'pt-br'
    },
    headers:{
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDBlZjMzY2VjZDQ5Y2VkZjAzNDFlMWI4NGZjMjM4NSIsIm5iZiI6MTcyNTgyMDQyNC43NTUwNDYsInN1YiI6IjY0ZjRjYmI4N2Q0MWFhMDEzODQ3YzViYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.us7pFcklEO1Z149t-FC51Y0mMCxFesA4CjEcULoUzu8' 
    }


})

export default apiMovie



