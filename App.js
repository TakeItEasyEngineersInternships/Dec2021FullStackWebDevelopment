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
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sem" component={Sem} />
          <Route path="/fistsemphy" component={FirstSemPhy} />
          <Route path="/fistsemchem" component={FirstSemchem} />
          <Route path="/thirdsem" component={ThirdSem} />
          <Route path="/fourthsem" component={FourthSem} />
          <Route path="/fifthsem" component={FifthSem} />
          <Route path="/sixthsem" component={SixthSem} />
          <Route path="/branch7" component={Branch7} />
          <Route path="/cse7" component={CSE} />
          <Route path="/ec7" component={EC} />
          <Route path="/eightsem" component={EighthSem} />
          <Route path="/cgpacalc" component={CGPACalc} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
