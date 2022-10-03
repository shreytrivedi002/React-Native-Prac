import axios from "axios";

const baseUrl = 'https://free-news.p.rapidapi.com/v1/search';


const searchNews = (text) => {
    const options = {
        method: 'GET',
        url: baseUrl,
        params: {q: text, lang: 'en'},
        headers: {
          'X-RapidAPI-Key': 'b63f72b597msh2c594d45b718fc6p15ea4cjsnb6e5d5d7ec75',
          'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
        }
    };
    
    axios.request(options).then(function (response) {
        return response.data;
    }).catch(function (error) {
        console.error(error);
    });
}

export {searchNews}