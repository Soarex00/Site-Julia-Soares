import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FeedBacks() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    // só ativa depois que os refs estão definidos
    setSwiperReady(true);
  }, []);

  return (
    <>
      <h2 id="feedbacks" className="text-4xl sm:text-5xl font-bold text-green-800 text-center m-8">
        O que os pacientes dizem:
      </h2>
      <div className="relative max-w-4xl mb-10 mx-auto">
        {swiperReady && (
          <Swiper
          
            spaceBetween={20}
            slidesPerView={2}
            loop={true}
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <div className="rounded-xl">
                <img src="../slide1.jpg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-xl">
                <img src="../slide1.jpg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-xl">
                <img src="../slide1.jpg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-xl">
                <img src="../slide1.jpg" />
              </div>
            </SwiperSlide>
          </Swiper>
        )}

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
