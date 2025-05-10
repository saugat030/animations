// This file tells TypeScript how to handle CSS imports
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module "swiper/css";
declare module "swiper/css/pagination";
declare module "swiper/css/navigation";
declare module "swiper/css/scrollbar";
// Add any other Swiper CSS modules you might use in the future
