import About from './components/About';
import Catalogue from './components/Catalogue';
import Contact from './components/Contact';
import Header from './components/Header';
import Main from './components/Main'
import Login from './components/Login'
import SingleProduct from './components/SingleProduct';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import ThankYou from './components/ThankYou';
import { Routes, Route } from 'react-router-dom';
const App = () => {

  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/catalogue" element={<Catalogue/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
    </>
  );
};

export default App;
