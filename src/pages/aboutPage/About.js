import React from 'react';

import ImgComp from '../../components/imgComp/ImgComp';

import './about.css';

const About = () => {
  return (
    <>
      <div className='about-img-cnt'></div>
      <ImgComp />
      <div>
        <div>
          <h1>I aspire to be a Front-end Developer</h1>
        </div>
        <div>
          <p>
            I am a fresher ECE graduate with quick problem solving skill,
            looking for a job as a Front-end Developer
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
