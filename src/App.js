import './App.scss';
import { BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Article from './pages/Article/Article';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';
import { useEffect } from 'react';
import About from './pages/About';



const ScrollToTop = () => {
  const {pathname} = useLocation();

  useEffect (() => {
    window.scrollTo (0, 0);
  }, [pathname])

  return null;
}

function App() {
  return (
    <div className="App">
      <div className='push-footer'>
      <BrowserRouter>
        <ScrollToTop/>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="catalog" element={<Catalog/>} />
          <Route path="about" element={<About/>} />

          <Route path="article/:articleId/:articleTitle?" element={<Article/>} />
        </Routes>
      </BrowserRouter>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
