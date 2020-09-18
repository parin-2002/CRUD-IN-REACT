import React,{useState} from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';

function List() 
{
 const [list,nlist]=useState([]);
async function Fd() 
  {
    const da=await axios.get("http://localhost:3000/data");
    nlist(da.data);
  }
  
Fd();

function pass(id) 
{
 alert(id)
}

async function del(id) 
{
  await axios.delete(`http://localhost:3000/data/${id}`);
}

return(
<>
<nav class="navbar navbar-light ">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1">CRUD Operation In React</span>
  </div>
</nav>
<div className="my-3">
 <NavLink to="/insert" className="btn btn-outline-primary but">Insert</NavLink>
 </div>
 <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Update</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
 
 {
   list.map((d)=>{
   return(
   <tr>
      <th scope="row">{d.id}</th>
      <td>{d.username}</td>
      <td>{d.email}</td>
      <td><NavLink className="btn btn-outline-primary" to={`/update/${d.id}/${d.username}/${d.email}`} onClick={()=>{pass(d.id)}}>Update</NavLink></td>
      <td><button className="btn btn-outline-danger" onClick={()=>{del(d.id)}}>Delete</button></td>
    </tr>
   );
   })
 }  
  </tbody>
</table>
</>
);
}

export default List;