import Navbar from "./components/Navbar/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/projects", element: <Projects /> },
      ]
      
    },
  ]);
  return (
      <>
        <RouterProvider router={routes} />
        <Footer/>
      </>
  );
}

export default App;
