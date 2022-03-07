import React,{useState,useEffect} from 'react'
import './listContas.css'

export default function ListaContas({setList,list,deletar}){
//somatotal

  const valores = list.map(data => data.valor)
 
  const somaTotal = valores.reduce((acumulate,data) => acumulate + data,0)
//increment

 

    return(
        <>
        <div align="center">
       <span>Saldo</span>
       <p >{somaTotal.toLocaleString('pt-br', {minimumFractionDigits: 2})}</p>
       </div>
<table className="table">
  <thead>
    <tr>
     
      <th scope="col">Titulo</th>
      <th scope="col">Plano de contas</th>
      <th scope="col">Pago?</th>
      <th scope="col">Valor</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    
     <td> {list.map((data)=>(<p key={data._id}>{data.titulo}</p>))}</td>
     <td> {list.map((data)=>(<p key={data._id}>{data.planodecontas}</p>))}</td>
     <td> {list.map((data)=>(<p  key={data._id}>{data.pago ? "sim" : "não"}</p>))}</td>
     <td className="valor"> {list.map((data)=>(<p key={data._id}>R$ {data.valor.toLocaleString('pt-br', {minimumFractionDigits: 2})}</p>))}</td>
     <td>
     <div>{list.map((data) => <p key={data._id}><button className="btn btn-success" onClick={deletar}type="submit">editar</button></p>)}</div>
     </td>
     <td>
     <div>{list.map((data) => <p key={data._id}><button className="btn btn-danger" onClick={deletar}type="submit">deletar</button></p>)}</div>
     </td>
    
     
    </tr>

  </tbody>
</table>


    
        </>
    )

}