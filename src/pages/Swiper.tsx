import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; //Add the src/types/css.d.ts to fix this error.
import "swiper/css/pagination"; //Add the src/types/css.d.ts to fix this error.
import { Pagination, Autoplay } from "swiper/modules";
import { images } from "./Home";

const SwiperComponent = () => {
  return (
    //<Swiper> always centers itself to the parent component.
    <div className="bg-red-100 w-full max-w-2xl h-80 flex items-center justify-center">
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="rounded-xl w-full h-full"
      >
        {images && images.length > 0 ? (
          images.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                src={item}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              No images available
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
