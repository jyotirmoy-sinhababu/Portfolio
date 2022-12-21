import React from 'react';

import './imgComp.css';
import profilePic from '../../images/myPhoto.jpg';

const ImgComp = () => {
  return (
    <div className='img-cnt'>
      <img className='my-photo' src={profilePic} alt='it has a photo' />
    </div>
  );
};

export default ImgComp;
