import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nanigation/Nav"; // Check spelling: "Nanigation" should be "Navigation"?
import Contents from "./components/contents/Contents";
import Contribute from "./components/contribute_tab/Contribute";
import Getdata from "./components/Getdata/Getdata";
import Adddata from "./components/AddData/Adddata";
import Request from "./components/Request/Request";
import Home from "./components/Home/Home";
import About from "./components/About/About";

function App() {
  return (
    <Router>
      {/* Navigation stays visible on all pages */}
      <Nav />  

      <Routes>
        <Route path="/" element={<Contents />} />
        <Route path="/contribute" element={<Contribute />} />
        <Route path="/get" element={<Getdata />} />
        <Route path="/Adddata" element={<Adddata />} />
        <Route path="/request" element={<Request />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />

      </Routes>
    </Router>
  );
}

export default App;
