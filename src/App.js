import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header/Header';
import Hero from './Pages/HERO/Hero';
import Body1 from './Pages/Body1/Body1';
import Body2 from './Pages/Body2/Body2';
import Newbody from './Pages/Body3/Body3';


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Newbody/>
      {/* <Body1/> */}
      {/* <Body2/> */}
    </div>
  );
}

export default App;
