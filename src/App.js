import React from 'react'
import { Routes ,BrowserRouter,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Post from './Pages/Post'
import NotFound from './Pages/NotFound'
import AddEdit from './Pages/AddEdit'
import Header from './components/Header'
import Bookmarks from './Pages/Bookmarks'


import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"


const App = () => {
  return (

    <BrowserRouter>
 

     <div  className='App'>
      <ToastContainer/>
      <Header/>

      <Routes>
        <Route  path="/" element={<Home/>}/>
        

        <Route  path="/addPost" element={<AddEdit/>}/>

        <Route  path="/editPost/:id" element={<AddEdit/>}/>
        

        <Route  path="/blog/:id" element={<Post/>}/>

        <Route  path="/bookmarks" element={<Bookmarks/>}/>

        


        <Route  path="*" element={<NotFound/>}/>


      </Routes>
     
     </div>
    </BrowserRouter>
    
  )
}

export default App