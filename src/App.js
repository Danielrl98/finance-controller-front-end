import React,{useState,useEffect} from 'react'
import api from './Api/apiConfig'
import ListaContas from './Componentes/ListaContas'

function App() {

const [list,setList] = useState([])



async function handleList(){
  
  const response = await api.get('listar')

  setList(response.data)
  
  
 }
useEffect(()=>{
  handleList()
  },[]
)

  return (
 
    <div className="container">
    <ListaContas  list={list}/>

    </div>

  );
}

export default App;
