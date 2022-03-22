import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const[mode, setMode] = useState("light");
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      alert_type: type
    })}

  setTimeout(() => {
    if(alert){
      setAlert(null);
    }
  }, 1000);

  const toggleMode = ()=>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#384458";
      showAlert("Dark Mode Enabled", "success");
    }else{
      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
    }
  }
  return (
    <>
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <Routes>
      <Route exact path="/" element={<TextArea heading="Enter your text to analyze" mode={mode} alert={showAlert}/>}/>
      <Route exact path="/about" element={<About mode={mode}/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
