import Header from './Components/Header';
import React from 'react';
import Sidebar from './Components/Sidebar';
import Page from './Components/Page';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Services from './Components/Services';
import About from './Components/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UseState from './UseState';
import UseEffect from './UseEffect';
import calculator from './Calculator';
import Calculator from './Calculator';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Header/>}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/services" element={<Services/>}/>
              <Route path="/*" element={<Page/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
    {/* <UseState />
    <UseEffect /> */}
    {/* <Calculator/> */}
    </>
  );
}

export default App;