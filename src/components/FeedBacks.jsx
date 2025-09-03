import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FeedBacks() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <h2 className="text-4xl sm:text-5xl font-bold text-green-800 text-center m-8">
        Oque os pacientes dizem:
      </h2>
      <div className="relative max-w-4xl mb-10  mx-auto">
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          modules={[Navigation]}
          loop={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
        >
          {/* Slides */}
          <SwiperSlide>
            <div className=" rounded-xl ">
              <img src="../slide1.jpg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-xl ">
              <img className=" " src="../slide1.jpg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" rounded-xl ">
              <img src="../slide1.jpg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" rounded-xl ">
              <img src="../slide1.jpg" />
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Botões customizados */}
        <button
          ref={prevRef}
          className="absolute top-1/2 left-0 -translate-y-1/2 p-2 bg-white rounded-full shadow transition z-10"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          ref={nextRef}
          className="absolute top-1/2 right-0 -translate-y-1/2 p-2 bg-white rounded-full shadow transition z-10"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </>
  );
}
