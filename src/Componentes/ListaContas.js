import React,{useState,useEffect} from 'react'


export default function ListaContas({list}){
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
      <th scope="col">#</th>
      <th scope="col">Titulo</th>
      <th scope="col">Plano de contas</th>
      <th scope="col">Pago?</th>
      <th scope="col">Valor</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
     <td > {list.map((data)=>(<p key={data._id}>{data.titulo}</p>))}</td>
     <td> {list.map((data)=>(<p key={data._id}>{data.planodecontas}</p>))}</td>
     <td> {list.map((data)=>(<p  key={data._id}>{data.pago}</p>))}</td>
     <td className="valor"> {list.map((data)=>(<p key={data._id}>R$ {data.valor.toLocaleString('pt-br', {minimumFractionDigits: 2})}</p>))}</td>

    </tr>

  </tbody>
</table>


    
        </>
    )

}