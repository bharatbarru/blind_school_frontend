
import { Routes,Route } from 'react-router-dom';
import './App.css';
 
import Homepage from './pages/homepage';
import Contact from './pages/contact';
import About from './pages/about';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
