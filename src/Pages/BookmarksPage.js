import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Heart from 'react-animated-heart';
import BookmarkIcon from './BookmarkIcon';
import { MDBIcon } from 'mdb-react-ui-kit';

const BookmarkPage = () => {
  const { id } = useParams();
  const [isBookmarked, setBookmarked] = useState(true); // Initial bookmarked state, you might want to fetch this from a context or API

  const handleRemoveBookmark = () => {
    // Logic to remove bookmark, e.g., update state or API
    setBookmarked(false);
  };

  // Fetch blog post details using the 'id' from the URL parameter
  const blogPostDetails = {
    // Fetch blog details using the 'id' from an API or context
    title: 'Bookmarked Blog Title',
    category: 'Bookmarked Category',
    description: 'Bookmarked Blog Description',
    imageUrl: 'URL to Image',
    excerpt: (description) => description.substr(0, 100), // Just an example function
  };

  return (
    <div>
      <Link to={`/blogs/${id}`} style={{ textDecoration: 'none', color: 'black' }}>
        Back to Blog
      </Link>

      <div>
        <h2>{blogPostDetails.title}</h2>
        <p>{blogPostDetails.category}</p>
        <img src={blogPostDetails.imageUrl} alt={blogPostDetails.title} />
        <p>{blogPostDetails.description}</p>
        <BookmarkIcon isBookmarked={isBookmarked} onClick={handleRemoveBookmark} />

        <div>
          <Heart isClick={false} /> {/* Just to keep the Heart component consistent */}
          <Link to={`/editPost/${id}`}>
            <MDBIcon fas icon="edit" style={{ color: '#55acee', fontSize: '28px' }} size="lg" />
          </Link>
          <MDBIcon
            title="Delete"
            fas
            icon="trash"
            size="lg"
            style={{ color: '#dd4b39', fontSize: '18px', cursor: 'pointer' }}
            onClick={() => handleDelete(id)}
          />
        </div>
      </div>
    </div>
  );
};

export default BookmarkPage;
