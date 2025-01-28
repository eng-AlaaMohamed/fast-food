import TextSlider from '../textSlider/TextSlider';
import Header from './Header';
import './home.css';

function Home() {
  return (
    <div className='home'>
      <div className="overlay"></div>
      <div className="home-content container">
        <Header />
        <TextSlider />
      </div>
    </div>
  )
}

export default Home;
