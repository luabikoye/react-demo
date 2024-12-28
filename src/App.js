import "./App.css";
import Content1 from "./pages/Hompagefiles/Content1/Content1";
import Content2 from "./pages/Hompagefiles/Content2/Content2";
import Footer from "./pages/Hompagefiles/Footer/Footer";
import Head from "./pages/Hompagefiles/Header/Header";
import Hero from "./pages/Hompagefiles/Hero/Hero";
import Content3 from "./pages/Hompagefiles/Lastcontent/Content3";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Hompagefiles/Homepage";
import First from "./pages/Firstpage/First";
import Second from "./pages/Secondpage/Secondpage";
import Third from "./pages/Thirdpage/Thirdpage";
import Fourth from "./pages/Fourthpage/Fourthpage";
import Fifth from "./pages/Fifthpage/Fifthpage";
import Sixth from "./pages/Sixthpage/Sixthpage";
import Seventh from "./pages/Seventhpage/Seventhpage";
import Eight from "./pages/Eightpage/Eightpage";
import Ninth from "./pages/Ninthpage/Ninthpage";
import Submit from "./pages/Submitpage/Submitpage";
import Gohome from "./pages/Gohomepage/Gohome";
import Dashboard from "./pages/Dashboardpage/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/apply" element={<First />} />
        <Route path="/apply2" element={<Second />} />
        <Route path="/apply3" element={<Third />} />
        <Route path="/apply4" element={<Fourth />} />
        <Route path="/apply5" element={<Fifth />} />
        <Route path="/apply6" element={<Sixth />} />
        <Route path="/apply7" element={<Seventh />} />
        <Route path="/apply8" element={<Eight />} />
        <Route path="/apply9" element={<Ninth />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/gohome" element={<Gohome />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
