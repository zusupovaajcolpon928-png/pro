import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/home/home";
import Life from "./pages/life/life";


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/life" element={<Life />} />

         















        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
