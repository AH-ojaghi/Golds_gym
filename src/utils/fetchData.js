export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': '155d3f3193mshadb49c9269c132ep1db684jsnee28b38f142a',
    },
  };
  
  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '155d3f3193mshadb49c9269c132ep1db684jsnee28b38f142a',
      'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };