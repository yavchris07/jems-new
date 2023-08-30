// import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/home';
import About from './pages/about';
import NavBar from './components/nav-bar';
import Contact from './pages/contact';
import Footer from './components/footer';
import Services from './pages/serives';

function Routing() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/apropos' Component={About} />
        <Route path='/contact' Component={Contact} />
        <Route path='/services' Component={Services} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default Routing;
