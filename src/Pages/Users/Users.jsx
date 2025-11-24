import axios from 'axios'
import React, { useEffect, useState } from 'react'
import usefetch from '../../Hooks/usefetch';

function Users() {
const{data,isloding,eroor}=usefetch('users');

if(isloding){
    return <h2>Wait......</h2>
}
if(eroor){
    return <h2>{eroor}</h2>
    
}


  return (
    <div className='p-5'>

      <table className='table'>
        <thead  >
       <tr>
        <th>id</th>
        <th>Name</th>
        <th>email</th>
        <th>action</th>
       </tr>


        </thead>

        <tbody>

       {
        data.users.map((user)=>{
       return  <tr className='p-2' key={user.id}>
             <td >{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td> </td>
        </tr>

        })
       }
        </tbody>
      </table>






       { console.log("render")};


    </div>
  )
}

export default Users
