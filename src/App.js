import './App.css';
import AboutUs from './components/aboutUs/AboutUs';
import BookAtable from './components/bookAtable/BookAtable';
import Footer from './components/footer/Footer';
import Home from "./components/home/Home";
import Menu from './components/menu/Menu';
import Offers from './components/offers/Offers';
import Opinions from './components/opinions/Opinions';
import ScrollBtn from './components/scrollToTop/ScrollBtn';

function App() {
  return (
    <div className="App">
      <Home />
      <Offers />
      <Menu />
      <AboutUs />
      <BookAtable />
      <Opinions />
      <Footer />
      <ScrollBtn />
    </div>
  );
}

export default App;
