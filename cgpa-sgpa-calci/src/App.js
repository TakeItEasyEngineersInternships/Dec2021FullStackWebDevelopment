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
        <Routes>
          <Route exact path="/" element={<Home/>} /> 
          <Route exact path="/sem" element={<Sem/>} />
          <Route exact path="/fistsemphy" element={<FirstSemPhy/>} />
          <Route exact path="/fistsemchem" element={<FirstSemchem/>} />
          <Route exact path="/thirdsem" element={<ThirdSem/>} />
          <Route exact path="/fourthsem" element={<FourthSem/>} />
          <Route exact path="/fifthsem" element={<FifthSem/>} />
          <Route exact path="/sixthsem" element={<SixthSem/>} />
          <Route exact path="/branch7" element={<Branch7/>} />
          <Route exact path="/cse7" element={<CSE/>} />
          <Route exact path="/ec7" element={<EC/>} />
          <Route exact path="/eightsem" element={<EighthSem/>} />
          <Route exact path="/cgpacalc" element={<CGPACalc/>} />
        </Routes>
    </Router>
  );
}

export default App;
