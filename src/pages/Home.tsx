import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import SwiperComponent from "./Swiper";

export const images = [
  "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWLw6zFDZjZ7MgncCczWlfwu6TQbmNHS2D7Q&s",
  "https://plus.unsplash.com/premium_photo-1673967831980-1d377baaded2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D",
];

const Home = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col gap-6 bg-yellow-200 p-4">
      <div
        id="Image_Slide_animation"
        className="relative w-[600px] h-[300px] overflow-hidden border-black rounded-lg border-2 bg-red-200"
      >
        <AnimatePresence mode="wait">
          <motion.img
            //giving the key here is important since every time the key changes after rerender , react treats the element as new component and assumes that the old img tag left the DOM. This triggers the framer's exit animation. key hlada ra na halda ko difference afai experiment gara.
            key={index}
            src={images[index]}
            alt={`Slide ${index}`}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute w-full h-full"
          />
        </AnimatePresence>
      </div>
      <SwiperComponent />
    </div>
  );
};

export default Home;
