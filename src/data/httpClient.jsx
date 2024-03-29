const API="https://api.themoviedb.org/3"
export function get(path,language = 'en-US'){
    return fetch(`${API}${path}?language=${language}`,{
        headers:{
            Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGRjMDkyMzZiODMyYzFlNmJjMmVmYTcxM2IyNmU1MCIsInN1YiI6IjY1ZjhmMzk4YTMxNDQwMDE2NDM2N2NlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A-XdSBBWuO07Pots40t7Sk9nZxUrHfFFYTCRXJJROxs",
        "Content-Type":"application/json;charset=utf-8"
        },
    }).then((result)=>result.json());
    
}