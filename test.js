
import axios from 'axios';

axios.post('https://cleanuri.com/api/v1/shorten',{url:'https://www.google.com'})
.then((response)=>{
    console.log(response.data)
})