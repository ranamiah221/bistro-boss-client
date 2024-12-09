import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';


import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionHeader from '../../../Shared/SectionHeader/SectionHeader';

const Category = () => {
  return (
    <section className='mt-5 mb-10'>
      <SectionHeader
        subHeading={"From 11:00am to 10:00pm"}
        heading={"Order Online"}
      ></SectionHeader>
       <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={slide1} alt="" /> 
            <h2 className='text-2xl uppercase font-semibold text-center -mt-20 text-white'>Salad</h2>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide2} alt="" /> 
        <h2 className='text-2xl uppercase font-semibold text-center -mt-20 text-white'>Pizza</h2>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide3} alt="" /> 
        <h2 className='text-2xl uppercase font-semibold text-center -mt-20 text-white'>Soup</h2>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide4} alt="" /> 
        <h2 className='text-2xl uppercase font-semibold text-center -mt-20 text-white'>Dessert</h2>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide1} alt="" /> 
        <h2 className='text-2xl uppercase font-semibold text-center -mt-20 text-white'>Salad</h2>
        </SwiperSlide>
        
      
      </Swiper>
    </section>
  );
};

export default Category;
