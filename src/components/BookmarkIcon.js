import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

function BookmarkIcon() {
  const [iconColor, setIconColor] = useState('black');

  const handleClick = () => {
    // Toggle the color between black and red
    const newColor = iconColor === 'black' ? 'red' : 'black';
    setIconColor(newColor);
  };

  return (
    <div className="bookmark-icon" style={{ cursor: 'pointer' }} onClick={handleClick}>
      <FontAwesomeIcon icon={faBookmark} color={iconColor} title="Bookmark"  />
    </div>
  );
}

export default BookmarkIcon;
