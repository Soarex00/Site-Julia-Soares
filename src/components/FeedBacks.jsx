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
    setSwiperReady(true);
  }, []);

  return (
    <>
      <h2
        id="feedbacks"
        className="text-3xl sm:text-4xl font-bold text-gray-900 text-center m-10"
      >
        O que os pacientes dizem:
      </h2>

      <div className="relative max-w-5xl mx-auto mb-10">
        {swiperReady && (
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
            }}
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
            {["slide1.jpg", "slide3.jpg", "slide4.jpg"].map(
              (img, index) => (
                <SwiperSlide key={index}>
                  <div className="relative rounded-xl overflow-hidden h-[600px] sm:h-[600px] md:h-[600px]">
                    <img
                      src={`../${img}`}
                      alt={`Feedback ${index + 1}`}
                      className="w-50% h-50% object-cover object-center"
                    />
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        )}

        {/* Botões */}
        <button
          ref={prevRef}
          className="absolute top-1/2 left-1 -translate-y-1/2 p-2 bg-white/90 hover:bg-white rounded-full shadow transition z-10"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          ref={nextRef}
          className="absolute top-1/2 right-1 -translate-y-1/2 p-2 bg-white/90 hover:bg-white rounded-full shadow transition z-10"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </>
  );
}
