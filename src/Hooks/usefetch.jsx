import axios from 'axios';
import React, { useEffect, useState } from 'react'

function usefetch(path) {

const[data,setdata]=useState({});
const [isloding,setloding] = useState(true);
const [eroor,seterror]=useState('');
const getusers = async()=>{

try{

const responce = await axios.get(`${import.meta.env.VITE_BURL}/${path}`);
console.log(responce.data);
setdata(responce.data);


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



  return{data,isloding,eroor}
}
export default usefetch
