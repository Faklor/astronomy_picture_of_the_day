import axios from 'axios'

const getDataNow = async(tag)=>await axios.get('https://api.nasa.gov/planetary/apod?api_key=qhEGoh68nycYipATXrh7qWgTSv4PZEPQbx5sdL26&'+tag, {onDownloadProgress:progressEvent=>{
   
    let percentCompleted = Math.floor(progressEvent.loaded / progressEvent.total * 100)
    console.log('completed: ', percentCompleted)
    //console.log(Math.floor(progressEvent.event.loaded/progressEvent.event.total*100))
    //console.log(progressEvent)
}})



export {
    getDataNow
}