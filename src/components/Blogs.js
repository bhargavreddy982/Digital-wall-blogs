import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Badge from './Badge';
import Heart from 'react-animated-heart';
import BookmarkIcon from './BookmarkIcon';
import axios from 'axios';
import {DragDropContext,Droppable,Draggable} from 'react-beautiful-dnd'



import { useNavigate } from 'react-router-dom';
import {
  MDBCol,
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBBtn,
  MDBIcon,
} from 'mdb-react-ui-kit';

const Blogs = ({ title, category, description, id, imageUrl, excerpt, handleDelete }) => {
  const navigate = useNavigate();

  const [isClick, setClick] = useState(false);

  // This is just an example state to represent whether the blog is bookmarked or not
//   const [isBookmarked, setBookmarked] = useState(true);

//   // Function to toggle bookmark
//   const toggleBookmark = async () => {
//     try {
//       // Fetch the current isBookmarked value from the server
//       const response = await axios.get(`http://localhost:5000/blogs/${id}`);
//       const currentIsBookmarked = response.data.isBookmarked;

//       // Toggle the isBookmarked value
//       const updatedIsBookmarked = !currentIsBookmarked;

//       // Update the isBookmarked value in the db.json file
//       await axios.patch(`http://localhost:5000/blogs/${id}`, {
//         isBookmarked: updatedIsBookmarked,
//       });
//     } catch (error) {
//       console.error('Error toggling bookmark:', error);
//     }
//   };

const [isBookmarked, setBookmarked] = useState(false);

  // Function to toggle bookmark
  const toggleBookmark = async () => {
    try {
      // Toggle the isBookmarked value locally
      setBookmarked(!isBookmarked);

      // Update the isBookmarked value in the db.json file
      await axios.patch(`http://localhost:5000/blogs/${id}`, {
        isBookmarked: !isBookmarked,
      });
    } catch (error) {
      console.error('Error toggling bookmark:', error);
    }
  };
  

  return (
    
    <MDBCol size="4" style={{padding:50}}>
        <DragDropContext>
            <Droppable droppableId="characters">
                {(provided) =>(

                

                

            

       


      <MDBCard className="h-100 mt-2" style={{ maxWidth: '22rem' }} {...provided.droppableProps} ref={provided.innerRef}>
       

        
        <MDBCardImage src={imageUrl} alt={title} position="top" style={{ maxWidth: '100%', height: '180px' }} />
        <Draggable>
            {(provided)=>(


            
        <MDBCardBody style={{paddingBottom:0}}  {...provided.dragableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
          <MDBCardTitle  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>{title}
          
            {/* <BookmarkIcon  state={{ isBookmarked }} // Pass the bookmarked state to the BookmarkPage
              style={{ textDecoration: 'none', color: 'inherit' }} isBookmarked={isBookmarked} />
           */}

<BookmarkIcon
              state={{ isBookmarked }}
              style={{ textDecoration: 'none', color: 'inherit' }}
              isBookmarked={isBookmarked}
              onClick={toggleBookmark} // Add this line to call the toggleBookmark function
            />
          </MDBCardTitle>
          <MDBCardText>
            {excerpt(description)}
            <Link to={`/blog/${id}`}> Read More</Link>

            
          </MDBCardText>
          


          <Badge style={{display:"inline-block"}}>{category}</Badge>

          {/* <div style={{width:1000}}className="d-flex justify-content-between align-items-center mt-3"> */}
          <div style={{height:50}} className="d-flex justify-content-between align-items-center">
  <div title="Like" style={{ display: 'inline-block', position:"relative",right:35 }} className="heart">
    <Heart   isClick={isClick} onClick={() => setClick(!isClick)} />
  </div>
  
  <div>
    <Link to={`/editPost/${id}`}>
      <MDBIcon   title="Edit" fas icon="edit" style={{ color: '#55acee',position:"relative",right:10, fontSize: '28px'  }} size="lg" />
    </Link>
    
    <MDBBtn    title="Delete" className="ml-2" tag="a" color="none" onClick={() => handleDelete(id)} style={{ color: '#dd4b39', fontSize: '18px' }}>
      <MDBIcon fas icon="trash" size="lg" />
    </MDBBtn>
  </div>
</div>

          
        </MDBCardBody>
        )}
        </Draggable>
      </MDBCard>
      )}

      </Droppable>

      </DragDropContext>
    </MDBCol>
  );
};

export default Blogs;
