
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './container/Home';
import Course from './container/Course';
import Project from './container/Project';
import Placement from './container/Placement';
import Contact from './container/Contact';
import About from './container/About';
import Header from './container/Header/Header';
import Footer from './container/Footer/Footer';

function App() {
  return (
    <div className="App">
    <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='course' element={<Course/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='project' element={<Project/>}/>
      <Route path='placement' element={<Placement/>}/>
      <Route path='contact' element={<Contact/>}/>
     

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
