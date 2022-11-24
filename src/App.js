import "./App.css";
import ReactGA from "react-ga";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ComAws from "./components/ComAws-dup";
import { AwsRum } from "./components/AwsRum";

function App() {
  const TRACKING_ID = "UA-250112221-2"; // YOUR_OWN_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);
  return (
    <Router>
      <Link to="/rum">link</Link>
      <div>
        <Routes>
          <Route path="/" element={<ComAws />} />
          <Route path="/rum" element={<AwsRum />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
