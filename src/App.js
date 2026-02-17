import Navbar from './components/Navbar/Navbar';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About.js';
import Skills from './components/Skills/Skills.js';
import Projects from './components/Projects/Projects.js';
import Contact from './components/Contact/Contact.js';

function App() {
  const routes=createBrowserRouter([
    {path:'/', element:<Navbar/>,children:[
      {path:'/', element:<Home/>},
      {path:'/about',element:<About/>},
      {path:'/skills',element:<Skills/>},
      {path:'/projects',element:<Projects/>},
      {path:'/contact',element:<Contact/>}

    ]}
  ]);
  return (
   <RouterProvider router={routes}/>
  );
}

export default App;
