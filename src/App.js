import { Routes, Route } from "react-router-dom";
import LandingPage  from "./components/landing-page/landing-page";
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <LandingPage/> } />
      </Routes>
    </div>
  )
}

export default App;
