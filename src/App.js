import './App.css';
import About from './pages/aboutPage/About';
import Home from './pages/homePage/Home';

import { Routes, Route } from 'react-router-dom';
import Container from './pages/container/Container';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<About />} />
          <Route path='/home' element={<Home />} />
          <Route path='/cnt' element={<Container />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
