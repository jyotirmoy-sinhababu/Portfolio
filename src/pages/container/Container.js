import NavBar from '../../components/nav/NavBar';
import ImgComp from '../../components/imgComp/ImgComp';

import './container.css';

const Container = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className='cnt-img-cnt'>
        <ImgComp />
      </div>
    </>
  );
};

export default Container;
