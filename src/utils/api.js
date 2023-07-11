import axios from "axios"

const BASE_URL = 'https://youtube138.p.rapidapi.com';

const options = {
    
    params: {
      
      hl: 'en',
      gl: 'US'
    },
    headers: {
      // 'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
    'X-RapidAPI-Key' : 'f4f35a30a8mshc251b32922a74bep18d893jsn60a258327c97',

      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
    },
  };

  export const fetchDataFromApi = async (url) => {
    const {data} =  await axios.get(`${BASE_URL}/${url}` , options);
    return data;
  };