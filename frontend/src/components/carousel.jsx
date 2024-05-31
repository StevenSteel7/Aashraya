
// carousel.jsx
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './ParallaxCarousel.css'; // Import your CSS file

// App.jsx or App.tsx
import 'swiper/css'; 


// import Swiper core and required modules

import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination, Navigation, Autoplay  } from 'swiper/modules'; //Import required modules

import 'swiper/css'; //Import swiper styles
import 'swiper/css/parallax';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


function Carousel() {
  const slides = [
    {
      img: 'https://getwallpapers.com/wallpaper/full/4/0/4/320645.jpg', // Image link 1
      title: 'Slide 1',
      subtitle: 'Subtitle 1',
    },
    {
      img: 'https://getwallpapers.com/wallpaper/full/3/b/5/322737.jpg', // Image link 2
      title: 'Slide 2',
      subtitle: 'Subtitle 2',
    },
    {
      img: 'https://getwallpapers.com/wallpaper/full/8/8/f/322815.jpg', // Image link 3
      title: 'Slide 3',
      subtitle: 'Subtitle 3',
    },
    {
      img: 'https://getwallpapers.com/wallpaper/full/9/d/5/323251.jpg', // Image link 4
      title: 'Slide 4',
      subtitle: 'Subtitle 4',
    },
    {
      img: 'https://getwallpapers.com/wallpaper/full/9/b/1/322408.jpg', // Image link 5
      title: 'Slide 5',
      subtitle: 'Subtitle 5',
    },
  ];

  return (
    <Swiper
      modules={[Parallax, Pagination, Navigation,Autoplay]}
      speed={900}
      spaceBetween={30}
      slidesPerColumn={2}
      slidesPerView={1}
      direction = {'horizontal'}
      parallax={true}
      effect={"cube"} 
      pagination={{ 
        type: 'bullets',
        clickable: true }}
      navigation={false}
      keyboard={true}
      loop={true} 
      className="parallax-carousel"
      autoplay={{
        delay: 2000, // Autoplay delay in milliseconds (3 seconds in this example)
        disableOnInteraction: false, // Keep autoplaying even after user interaction
      }}
    >
      {slides.map((slide, index) => ( 
        <SwiperSlide key={index} style={{background: `url(${slide.img}) center/cover`}}> 
          <div className="slide-content" data-swiper-parallax="-400">
            <h2>{slide.title}</h2> 
            <p>{slide.subtitle}</p> {/* Added subtitle */}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
