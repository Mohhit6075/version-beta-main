import "./Swiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-pagination-color": "#6054aa",
          "--swiper-navigation-color": "#6054aa",
        }}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/Images/img1.webp" alt="" loading="lazy"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Images/img2.webp" alt="" loading="lazy"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Images/img4.webp" alt="" loading="lazy"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Images/img5.webp" alt="" loading="lazy"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Images/img6.webp" alt="" loading="lazy"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Images/img7.webp" alt="" loading="lazy"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Images/img8.webp" alt="" loading="lazy"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Images/img9.webp" alt="" loading="lazy"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Images/img10.webp" alt="" loading="lazy"/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
