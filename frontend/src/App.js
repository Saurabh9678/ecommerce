import Header from "./component/layout/Header/Header.jsx";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import "./App.css";
import WebFont from "webfontloader";
import React from "react";
import Footer from "./component/layout/Footer/Footer.jsx"
import Home from "./component/Home/Home.jsx"

function App() {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  
    
  }, [])
  
  return (
    <Router>
      <Header />
      <Routes>

      <Route exact path="/" element={<Home/>} />



      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
