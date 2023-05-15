import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import ProductList from './pages/ProductList';
import BookMark from './pages/BookMark';
import Footer from './components/Footer';

function App() {
  return (
  <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/products/list' element={<ProductList />} />
      <Route path='/bookmark' element={<BookMark />} />
    </Routes>
    <Footer />
  </Router>
  );
}

export default App;
