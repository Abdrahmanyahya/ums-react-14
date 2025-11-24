import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Users() {
const[users,setusers]=useState([]);
const [isloding,setloding] = useState(true);
const [eroor,seterror]=useState('');
const getusers = async()=>{

try{

const responce = await axios.get(`${import.meta.env.VITE_BURL}/users`);
console.log(responce.data.users);
setusers(responce.data.users);


}catch(err){
console.log(err.message);
seterror(err.message);
}finally{
setloding(false);
}


}

useEffect(()=>{
getusers();
},[])


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
        users.map((user)=>{
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
