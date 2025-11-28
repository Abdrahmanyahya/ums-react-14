import React from 'react'
import usefetch from '../../Hooks/usefetch';
import { useParams } from 'react-router-dom';

function User() {
const {id}=useParams();
const{data,isloding,eroor}=usefetch(`users/${id}`);

if(isloding){
    return <h2>Wait......</h2>
}
if(eroor){
    return <h2>{eroor}</h2>
    
}


  return (
    <div>

<h2 className='p-4'>User Details</h2>

<ul class="list-group">
  <li class="list-group-item">{data.data.id}</li>
  <li class="list-group-item">{data.data.name}</li>
  <li class="list-group-item">{data.data.email}</li>
  <li class="list-group-item">{data.data.age}</li>
</ul>

    </div>
  )
}

export default User
