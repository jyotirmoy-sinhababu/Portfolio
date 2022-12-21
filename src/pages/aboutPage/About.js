import React from 'react';
import { useNavigate } from 'react-router-dom';

import ImgComp from '../../components/imgComp/ImgComp';

import './about.css';

const About = () => {
  const navigate = useNavigate();

  const handleClick = () => {};

  return (
    <>
      <div className='abt-cnt'>
        <div className='abt-img-cnt'>
          <ImgComp />
        </div>

        <div className='abt-txt-cnt'>
          <div className='abt-header-cnt'>
            <h1 className='abt-header-txt'>
              I aspire to be a Front-end Developer
            </h1>
          </div>
          <div className='abt-para-txt'>
            <p>
              I am a fresher ECE graduate with quick problem solving skill,
              looking for a job as a Front-end Developer
            </p>
          </div>
        </div>
        <div className='abt-btn-cnt'>
          <p className='abt-btn-cnt-txt'>Please look around...</p>
          <button className='abt-btn'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='30'
              height='30'
              fill='currentColor'
              className='bi bi-arrow-right'
              viewBox='0 0 16 16'
            >
              <path
                fillRule='evenodd'
                d='M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z'
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
