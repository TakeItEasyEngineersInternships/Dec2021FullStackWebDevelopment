import "./App.css";
import Home from "./pages/Home.js";
import Sem from "./pages/Sem";
import FirstSemPhy from "./pages/sems/FirstSemPhy.js";
import FirstSemchem from "./pages/sems/FirstSemchem";
import ThirdSem from "./pages/sems/ThirdSem";
import FourthSem from "./pages/sems/FourthSem";
import FifthSem from "./pages/sems/FifthSem";
import SixthSem from "./pages/sems/SixthSem";
import Branch7 from "./pages/sems/7thSem/Branch7";
import CSE from "./pages/sems/7thSem/CSE";
import EighthSem from "./pages/sems/EighthSem";
import EC from "./pages/sems/7thSem/EC";
import CGPACalc from "./pages/CGPACalc";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/sem" element={<Sem />} />
          <Route path="/fistsemphy" element={<FirstSemPhy />} />
          <Route path="/fistsemchem" element={<FirstSemchem />} />
          <Route path="/thirdsem" element={<ThirdSem />} />
          <Route path="/fourthsem" element={<FourthSem />} />
          <Route path="/fifthsem" element={<FifthSem />} />
          <Route path="/sixthsem" element={<SixthSem/>} />
          <Route path="/branch7" element={<Branch7/>} />
          <Route path="/cse7" element={<CSE/>} />
          <Route path="/ec7" element={<EC/>} />
          <Route path="/eightsem" element={<EighthSem/>} />
          <Route path="/cgpacalc" element={<CGPACalc/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
