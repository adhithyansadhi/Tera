import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Navigation/Nav.jsx";
import Contents from "./components/contents/Contents";
import Contribute from "./components/contribute_tab/Contribute.jsx";
import Getdata from "./components/Getdata/Getdata.jsx";
import Adddata from "./components/AddData/Adddata.jsx";
import Request from "./components/request/Request.jsx";
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
        <Route path="/adddata" element={<Adddata />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/request" element={<Request />} />
      </Routes>
    </Router>
  );
}

export default App;
