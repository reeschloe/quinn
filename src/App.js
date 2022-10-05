import Header from "./layout/Header"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./layout/Home"
import About from "./layout/About"
import Gallery from "./layout/Gallery"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </>
    
    
  );
}

export default App;
