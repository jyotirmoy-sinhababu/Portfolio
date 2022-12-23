import NavBar from '../../components/nav/NavBar';
import ImgComp from '../../components/imgComp/ImgComp';
import ContactMe from '../../components/contact/ContactMe';

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
      <div>
        <ContactMe />
      </div>
    </>
  );
};

export default Container;
