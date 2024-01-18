import axios from 'axios'

const getDataNow = async(tag)=>await axios.get('https://api.nasa.gov/planetary/apod?api_key=qhEGoh68nycYipATXrh7qWgTSv4PZEPQbx5sdL26&'+tag)



export {
    getDataNow
}