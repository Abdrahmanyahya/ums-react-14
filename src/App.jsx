import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Footer from './Component/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Users from './Pages/Users/Users'
import User from './Pages/Users/User'
import Adduser from './Pages/Users/Adduser'

function App() {
  return (
    <div>
     <Navbar></Navbar>
       <Routes>

        <Route path='/' element={<Home></Home>}></Route>
          <Route path='/users' element={<Users></Users>}></Route>
           <Route path='/user' element={<User></User>}></Route>
              <Route path='/users/adduser' element={<Adduser></Adduser>}></Route>


       </Routes>



     <Footer></Footer>

    </div>
  )
}

export default App
