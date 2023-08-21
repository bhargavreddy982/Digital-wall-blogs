import React ,{useState,useEffect}from 'react'
import axios from "axios";
import Search from '../components/Search';
import {MDBRow,MDBCol,MDBContainer,MDBTypography} from "mdb-react-ui-kit"
import {toast} from "react-toastify";
import Blogs from '../components/Blogs';
const Home = () => {
  const[data,setData]=useState([]);
  const [searchValue,setSearchValue]=useState("");


  useEffect(()=>{
    loadBlogData();
  },[])

  const loadBlogData=async()=>{
    const response=await axios.get("http://localhost:5000/blogs");
 
    if(response.status===200){
      setData(response.data)
    } else{
      toast.error("something went wrong");
    }
  };

  console.log("data",data);



  
  const handleDelete= async (id)=>{
    if(window.confirm("Are you sure want to delete the blog")){
      const response=await axios.delete(`http://localhost:5000/blogs/${id}`);
      if(response.status === 200){
        toast.success("Blog Deleted Succesfully");
        loadBlogData();
      } else{
        toast.error("something went wrong");
      }
    }
  };

  

  const excerpt=(str)=>{
    if(str.length>200){
      str=str.substring(0,200) + " ..."
    }
    return str;
  };

  const onInputChange=(e)=>{
    if(!e.target.value){
      loadBlogData();
    }
    setSearchValue(e.target.value);
  }

  const handleSearch= async(e)=>{
    e.preventDefault();
    const response=await axios.get(`http://localhost:5000/blogs?q=${searchValue}`);
  if(response.status===200){
    setData(response.data)
  } else{
    toast.error("something went wrong")
  }
  }

  return (
    
  
    <>
    <Search searchValue={searchValue} onInputChange={ onInputChange} handleSearch={ handleSearch}/>
    <MDBRow>
      {data.length===0 && (
        <MDBTypography style={{color:'grey',display: "flex",textAlign:'center',justifyContent:"center",fontSize:"1000"}}className="text-center mb-0" tag="h">
          <center>
            <div style={{fontSize:80,paddingTop:"25%"}} >
            Nothing here yet.?
            </div>
            <p style={{fontSize:25}}>
              Create your first post by clicking '+' above
            </p>
          
          </center>
          

        </MDBTypography>
      )}
      <MDBCol>
        <MDBContainer>
          <MDBRow>
            {data && data.map((item,index)=>(
              <Blogs
              key={index}
              {...item}
              excerpt={excerpt}
              handleDelete={handleDelete}
              />

            ))}
          </MDBRow>

        </MDBContainer>
      </MDBCol>
    </MDBRow>
    </>
 
    
  )
}

export default Home