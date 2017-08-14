import axios from 'axios'

//variables
var popReadApi= 'https://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/7.json';
var newestToOldest = "https://api.nytimes.com/svc/movies/v2/reviews/by-title/.json";





//functions
export function popReads(){
    return axios.get(popReadApi, {
        params:{
           'api-key': "b372f7c9331349b6a7a67045deb3a342"
        }
    }).then(response=>response.data)
}


export function timelineReads(){
    return axios.get(newestToOldest, {
        params:{
            'api-key': "b372f7c9331349b6a7a67045deb3a342"
        }
    }).then(response=>response.data)
}