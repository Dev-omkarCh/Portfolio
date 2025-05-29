import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import useTheme from "./store/themeStore";
import { Toaster } from "react-hot-toast";

// font-playfair

const App = () => {
  const {theme, setTheme} = useTheme();
  return (
    <BrowserRouter> 
        <div className={`min-h-screen 
          ${theme ? "bg-dark-primary text-white" : " bg-light-secondary text-black"} transition-all duration-500 ease-in-out`}
          >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Toaster position="top-right" />
    </BrowserRouter>
    
  );
};

export default App;
