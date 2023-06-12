import './App.css';
import Header from './Components/Header';
import About from './Components/about';
import Redirect from './Components/Redirect';
import Services from './Components/Services';
import Industry from './Components/Industry';
import Coverage from './Components/coverage';
import Contact from './Components/contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
   <Router>
      <Header />
      <Routes>
        <Route path='' element={<Home />}></Route>
        <Route path='/about' element={<Redirect />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/coverage' element={<Coverage />}></Route>

        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/Industry' element={<Industry />}></Route>
        
      </Routes>
      <Footer />
   </Router>
  );
}

export default App;
