import axios from 'axios'
import React, { useEffect, useState } from 'react'
import usefetch from '../../Hooks/usefetch';
import { Link } from 'react-router-dom';
import { Bounce, toast } from 'react-toastify';





function Users() {



    const userdelet =async (id)=>{

     const responce =await axios.delete(`${import.meta.env.VITE_BURL}/users/${id}`); 
console.log(responce);

if(responce.status==200){
    toast.success('🦄 Wow so easy!', {
 position: "top-right",
 autoClose: 4997,
 hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});
}

    }

    const [page ,setpage] = useState(1);
const{data,isloding,eroor}=usefetch(`users?limit=5&skip=${(page-1)*5}`,[page]);
const numofpage = Math.ceil(data.totalCount/data.limit);
console.log(numofpage);
if(isloding){
    return <h2>Wait......</h2>
}
if(eroor){
    return <h2>{eroor}</h2>
    
}

const pageitem = [] ;
  
for( let i=1;i<numofpage;i+=1){



pageitem.push(<li class="page-item" onClick={()=>{setpage(i)}}><a class="page-link" href="#">{i}</a></li>
);
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
            <td> <Link to={`/users/${user.id}`} className='btn btn-outline-success'>Detailes</Link></td>
                        <td> <button  onClick={()=>userdelet(user.id)} className='btn btn-outline-danger'>Delete</button></td>

        </tr>

        })
       }

      

        </tbody>
      </table>


<nav aria-label="Page navigation example ">
  <ul className="pagination  ms-5">
    <li className="page-item" disabled={page==1} onClick={()=>{setpage(page-1)}}><a className="page-link" href="#">Previous</a></li>
    {pageitem}
    <li className="page-item" disabled = {page==numofpage} onClick={()=>{setpage(page+1)}} ><a className="page-link"  href="#">Next</a></li>
  </ul>
</nav>



       { console.log("render")};


    </div>
  )
}

export default Users
