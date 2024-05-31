// carousel.jsx
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// App.jsx or App.tsx
import 'swiper/css'; 


import './App.css';
import Carousel from './components/carousel';
import Navbar from './components/Navbar';
import CausesGrid from './components/causeCard';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='w-screen h-10'>
        <Carousel/>
      </div>
      <div className='w-screen h-auto bg-slate-200'>
      
      </div>

    </div>
  );
}

export default App;
