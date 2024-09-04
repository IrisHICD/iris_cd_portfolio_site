import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import About from "./components/About/About";
import TopNav from "./components/TopNav/TopNav";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<TopNav />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
