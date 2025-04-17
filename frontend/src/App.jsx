// App.jsx
import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Offerings from './Components/Offerings';
import Partners from './Components/Partners';
import Careers from './Components/Careers';
import Contact from './Components/Contact';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />
      <Hero />
      <About />
      <Offerings />
      <Partners />
      <Careers />
      <Contact />
      </div>
  );
};

export default App;
