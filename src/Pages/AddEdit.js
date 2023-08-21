import React  ,{useState,useEffect} from 'react'
import {MDBValidation,MDBInput,MDBBtn} from "mdb-react-ui-kit";
import axios from "axios";
import {toast} from "react-toastify";
import { useNavigate,useParams } from 'react-router-dom';
import Header from '../components/Header';
//qxflsrlm


const initialState={
  title:"",
  description:"",
  category:"",
  imageUrl:""
}


const options=["Travel","Fashion","Fitness","Sports","Food","Tech"];

const AddEdit = () => {

  
  
  const [formValue,setFormValue] =useState(initialState);
  const[categoryErrMsg,setCategoryErrMsg]=useState(null);
  const {title,description,category,imageUrl}=formValue;
  const[editMode,setEditMode]=useState(false);
  

  const navigate=useNavigate();

  const {id}=useParams();

  useEffect(()=>{
    if(id)
{
  setEditMode(true);
  getSingleBlog(id);

}

else{
  setEditMode(false);
  setFormValue({...initialState});
}
  },[id]);


  const getSingleBlog= async(id)=>{

    const singleBlog= await axios.get(`http://localhost:5000/blogs/${id}`);
    if(singleBlog.status===200){
      setFormValue({...singleBlog.data});
    }
    else{
      toast.error("something went wrong")
    }
  }

const getDate=()=>{
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because months are zero-indexed
  const day = currentDate.getDate().toString().padStart(2, '0');
  
  return `${year}-${month}-${day}`;
}
  const handleSubmit = async (e)=>{
    e.preventDefault();
    if(!category){
      setCategoryErrMsg("please select category");
    }
   const imageValidation=!editMode ? imageUrl:true;
   if(title&& description && imageUrl && category){
    const currentDate=getDate();
    
    //if inedit mode

    if(!editMode){


      const updatedBlogData={...formValue,date:currentDate,isBookmarked: false,};
    const response=await axios.post("http://localhost:5000/blogs",updatedBlogData);
    if(response.status===201){
      toast.success("blog created succesfully")
    } else{
      toast.error("something went wrong")
    }

    }else{

      const response=await axios.put(`http://localhost:5000/blogs/${id}`,formValue);
    if(response.status===200){
      toast.success("blog updated succesfully")
    } else{
      toast.error("something went wrong")
    }

    }




    
    setFormValue({title:"",description:"",category:"",imageUrl:""})
    navigate("/")
   }
    
   
  };






  const onInputChange=(e)=>{
    let {name,value}=e.target;
    setFormValue({...formValue,[name]:value});
  };

  const onUploadImage =(file)=>{
    console.log("file",file);
    const formData=new FormData();
    formData.append("file",file);
    formData.append("upload_preset","qxflsrlm");
    axios.post("http://api.cloudinary.com/v1_1/dhkjdlpfx/image/upload",formData).then((resp)=>{
      console.log("Response",resp);
      toast.info("Image uploaded succesfully");
      setFormValue({...formValue,imageUrl:resp.data.url})
    })
    .catch((err)=>{
      toast.error("something went wrong");
    });
  };
  
  const onCategoryChange=(e)=>{
    setCategoryErrMsg(null);
    setFormValue({...formValue,category:e.target.value});
  };







  return (
    

    <div className="d-flex justify-content-center align-items-center vh-100" style={{ marginTop: "-200px" }}>
   <MDBValidation className="row g-3" style={{marginTop:"150px"}}  noValidate onSubmit={handleSubmit}>
    <center>
    <p  className="fs-2 fw-bold " >
  {editMode ?"Update Post" :"Create a Post"}
</p>
    </center>



<div  

style={{
  margin:"auto",
  padding:"15px",
  maxWidth:"400px",
  alignContent:"center"
}}
>

<MDBInput
  value={title || ""}
  name="title"
  type="text"
  onChange={onInputChange}
  required
  label="Title"
  validation="Please provide a title"
 
  invalid
  
/>

<br/>
<textarea
          className="form-control"
          value={description}
          name="description"
          onChange={onInputChange}
          required
          placeholder="What's in your Mind??"
          rows={4}
          aria-label="Description"
        />

  <br/>

  {!editMode && (
    <>
     <MDBInput
  
  name="title"
  type="file"
  onChange={(e)=>onUploadImage(e.target.files[0])}
  required
 
  validation="Please provide a title"
  invalid
  
  />

  <br/>

    </>
  )}

  

  <select className="categoryDropdown" onChange={onCategoryChange} value={category}>
  <option value="">Please select a category</option>
  {options.map((option, index) => (
    <option value={option} key={index}>
      {option}
    </option>
  ))}
</select>
{categoryErrMsg && (
  <div className="categoryErrorMsg">
    {categoryErrMsg}
  </div>
)}

  <br/>
  <br/>
  <div className="d-flex justify-content-center">
    

    <MDBBtn color="danger" style={{ marginRight: '10px' , backgroundColor:'black'}} onClick={() => navigate('/')}>
      Go Back
    </MDBBtn>

    <MDBBtn type="submit" style={{ marginRight: '20px', backgroundColor:"#E52B50" }}>
      {editMode ? 'Update' : 'Publish'}
    </MDBBtn>
  </div>

    
  

</div>
   </MDBValidation>
   </div>
  )
}

export default AddEdit