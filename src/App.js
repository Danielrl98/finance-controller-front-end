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


async function deletar(){

  const response = await api.get('listar')

 if(response){

    const deletar =  await api.delete(`http://localhost:5000/deletar/${response.data._id}`)

    if(deletar){
      list.filter(handleList)
    }

}}

  return (
 
    <div className="container">
    <ListaContas  list={list} deletar={deletar} setList={setList}/>

    </div>

  );
}

export default App;
