import axios from 'axios'


const api = axios.create({

    baseURL:'http://localhost:5000/'
})
if(api){
    console.log('Api conectada ao servidor com sucesso')
}


export default api
