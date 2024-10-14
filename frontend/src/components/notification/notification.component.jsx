import React from 'react';
import './notification-styles.css';

const Notification = ({ content }) => {
    const { title, textContent } = content;
  return (
    <div className='notification-container'>
        <h5>{title}</h5>
        <p>
            {textContent}
        </p>
    </div>
  )
}

export default Notification;