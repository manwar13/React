import { BrowserRouter as Router,Routs,Route,Link, Routes } from 'react-router-dom';


import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Industry from './Component/Industry';
import Coverage from './Component/Coverage';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import './App.css';

function App() {
  return (
    <Router>

      <Navbar />
      
    <Routes>

      <Route path="/" element={<Home />}></Route>
      <Route path="/About" element={<About />}></Route>
      <Route path="/Industry" element={<Industry />}></Route>
      <Route path="/Coverage" element={<Coverage />}></Route>
      <Route path="/Contact" element={<Contact />}></Route>

    </Routes>

    <Footer />
            
    </Router>


  );
}

export default App;
