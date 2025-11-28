import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Adduser() {


const navgaite = useNavigate();
const{register,handleSubmit,formState:{errors}}=useForm();
const [prwiviusimgae,setpriwvus] = useState();

const adduser =async(values)=>{

const formData=new FormData();

formData.append("name",values.name);
formData.append("email",values.email);
formData.append("age",values.age);
formData.append("image",values.image[0]);
try{
const responce = await axios.post(`${import.meta.env.VITE_BURL}/users`,formData);
console.log(responce.status);
if(responce.status==200){
  navgaite('/users');
}

}catch(err){
  console.log(err.response);
  console.log(err.status);
}




//formData.append("image",values.name);




}

const handelprewviusimage= (event)=>{
console.log(event.target.files[0]);
setpriwvus(URL.createObjectURL(event.target.files[0]));


}

const onhandelsubmit=(e)=>{
  e.preventDefault();
  console.log(user);
}
  return (
   <div>
    <form className='p-4' onSubmit={handleSubmit(adduser)}>
<div className="form-floating mb-3">
    <input {...register('name')}type="text" name='name'  className="form-control w-75" id="floatingInput" placeholder="enter your name" />
    <label htmlFor="floatingInput">Name User</label>
  </div>
 

 <div className="form-floating mb-3">
    <input {...register('email')}type="email" name='email'  className="form-control w-75" id="floatingInput" placeholder="enter Email User" />
    <label htmlFor="floatingInput">Email User</label>
  </div>

  <div className="form-floating mb-3">
    <input  {...register('age')}type="text" name='age'  className="form-control w-75" id="floatingInput" placeholder="enter Age User" />
    <label htmlFor="floatingInput">Age User</label>
  </div>
  <div className="form-floating mb-3">
    {prwiviusimgae? <img src={prwiviusimgae} width="50px"/> :''}

    <input  {...register('image')} onChange={handelprewviusimage} type="file" name='image'  className="form-control w-75" id="floatingInput" placeholder="enter Age User" />
    <label htmlFor="floatingInput"></label>
  </div>
  <button className='btn btn-outline-info'>Adduser</button>
    </form>
  
</div>

  )
}

export default Adduser
