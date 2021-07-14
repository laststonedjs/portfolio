import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';

import './App.css';
import NavBar from '../NavBar/NavBar';
import GoHome from '../GoHome/GoHome';


const App = () => {
 return ( <div>
    <BrowserRouter>
       <div>
           <NavBar />
           <Route path="/" exact component={Home} />
           <Route path="/about" exact component={About} />
           <Route path="/projects" exact component={Projects} />
           <Route path="/skills" exact component={Skills} />
           <Route path="/contact" exact component={Contact} />
           <GoHome />
       </div>
    </BrowserRouter>
    </div>
    );
};


export default App;