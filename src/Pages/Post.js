import React, { useState, useEffect } from 'react';
import {
  MDBContainer,
  MDBIcon,
  MDBTypography,
} from 'mdb-react-ui-kit';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Badge from '../components/Badge';

const Post = () => {
  const [blog, setBlog] = useState();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSingleBlog();
    }
  }, [id]);

  const getSingleBlog = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/blogs/${id}`);
      setBlog(response.data);
    } catch (error) {
      toast.error('Something went wrong');
    }
  };

  const styleInfo={
    display:"inline",
    marginLeft:"5px",
    float:"right",
    marginTop:"7px",
  }

  return (
    <MDBContainer style={{ border: '1px solid #d1ebe8', textAlign: 'center' }}>
      <Link to="/home">
        <strong style={{ float: 'left', color: 'black' }} className="mt-3">
          Go Back
        </strong>
      </Link>

      <div style={{ marginTop: '20px' }}>
        <MDBTypography tag="h2" className="text-muted mt-2">
          {blog && blog.title}
        </MDBTypography>
        <img
          src={blog && blog.imageUrl}
          className="img-fluid rounded"
          alt={blog && blog.title}
          style={{ width: '100%', maxHeight: '600px' }}
        />
      </div>

      <div style={{marginTop:"20px"}}>
        <div style={{height:"43px",background:"#f6f6f6"}}>
          <MDBIcon
            style={{marginRight:"5px"}}
            className="mt-3"
            icon="calendar-alt"
            size="lg"

             />
             <strong style={{marginTop:"12px",marginLeft:"2px"}}>
              {blog && blog.date}
             </strong>

             <Badge styleInfo={styleInfo}>
              {blog && blog.category}
             </Badge>
          

        </div>

        <MDBTypography className="lead md-0">
          {blog && blog.description}

        </MDBTypography>

      </div>
    </MDBContainer>
  );
};

export default Post;
