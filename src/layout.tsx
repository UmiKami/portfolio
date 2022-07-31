import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Projects from './views/Projects';
import Experience from './views/Experience';
import About from './views/About';
import Contact from './views/Contact';
import "./styles/Home.css"

const Layout = () => {
  return <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>     
        <Route path='/projects' element={<Projects/>}/>    
        <Route path='/experience' element={<Experience/>}/>    
        <Route path='/about' element={<About/>}/>    
        <Route path='/contact' element={<Contact/>}/>    
    </Routes>    
  </BrowserRouter>
}

export default Layout