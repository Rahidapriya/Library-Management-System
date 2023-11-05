
          // import Swiper core and required modules
          import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

          import { Swiper, SwiperSlide } from 'swiper/react';
          import ban2 from '../../assets/ban2.jpg'
          import ban3 from '../../assets/ban3.jpg'
          import ban4 from '../../assets/ban4.jpg'
        
          
          // Import Swiper styles
          import 'swiper/css';
          import 'swiper/css/navigation';
          import 'swiper/css/pagination';
          import 'swiper/css/scrollbar';
const Banner = () => {
    return (
        <div>
      <Swiper
        // Install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        // navigation
        autoplay={true}
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          {/* <img src={banner3} alt="" style={{ width: '100%', height: '90vh' }} /> */}
          <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={ban2} className="w-6/12 rounded-lg " />
    <div>
      <h1 className="text-6xl font-bold text-black"><span className='text-[#ff0000]'>BoiPoka</span> is Where Knowledge Begins</h1>
      <p className="py-6 text-xl">Start your journey in the world of books and information. Manage, Borrow, and Discover with Ease.</p>
      {/* <button className="btn btn-primary">Get Started</button> */}
    </div>
  </div>
</div>
        
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src={banner2} alt="" style={{ width: '100%', height: '90vh' }} /> */}
          <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={ban3} className="w-6/12 rounded-lg " />
    <div>
      <h1 className="text-6xl font-bold text-black"><span className='text-[#ff0000]'>BoiPoka</span> is Your Passport to a World of Books</h1>
      <p className="py-6 text-xl">Your One-Stop Solution for Library Management. Borrow, Explore, and Discover Knowledge Seamlessly.</p>
      {/* <button className="btn btn-primary">Get Started</button> */}
    </div>
  </div>
</div>

          {/*  */}
         
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src={banner1} alt="" style={{ width: '100%', height: '90vh' }} /> */}
          <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={ban4} className="w-6/12 rounded-lg " />
    <div>
      <h1 className="text-6xl font-bold text-black"><span className='text-[#ff0000]'>BoiPoka</span> is Your Key to the Library of Tomorrow</h1>
      <p className="py-6 text-xl">Experience Modern Library Management. Borrow, Explore, and Embrace the Future of Knowledge.</p>
      {/* <button className="btn btn-primary">Get Started</button> */}
    </div>
  </div>
</div>
         
        </SwiperSlide>
      </Swiper>
    </div>
    );
};

export default Banner;