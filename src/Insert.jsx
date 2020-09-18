import React,{useState} from 'react';
import axios from 'axios';

function Insert() 
{
 const [obj,nobj]=useState();
   function collect(event) 
   {
     const {name,value}=event.target;
     nobj((preObj) =>{
      return {...preObj,
      [name]:value};
      });
   }
   
 async function Add() 
   {
    alert(JSON.stringify(obj));
    await axios.post("http://localhost:3000/data",obj);
     alert('Data inserted');
     nobj({});
     window.location.replace("http://localhost:3001/");
   }
   
	return(
	<>
	<h1 class="text-center my-2">Insert Data</h1>
	<div class="row mt-5">
	    <div class="col-8 mx-auto">
	       <div class="mb-3">
                <label class="form-label">Username</label>
                <input onChange={collect} name="username" type="text" class="form-control" placeholder="Username"/>
          </div>
          
           <div class="mb-3">
                <label  class="form-label">Email address</label>
                <input onChange={collect} name="email" type="email" class="form-control" placeholder="Email"/>
          </div>
          
           <div class="mb-3">
                <button class="btn btn-primary" onClick={Add}>Submit</button>
           </div>
	    </div>
	</div>
	</>
	);
}

export default Insert;