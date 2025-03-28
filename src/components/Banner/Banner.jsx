import React, { useState } from 'react'
import banner from "../../assets/images/SOne_index_banner.jpg"
import thmn from "../../assets/images/SOne_index_pic01.jpg"
import thmn2 from "../../assets/images/SOne_index_pic02.jpg"
import promo from "../../assets/images/banner_promotion_01.jpg"
import promo2 from "../../assets/images/banner_promotion_02.jpg"

import prevBtn from "../../assets/images/SOne_index_arrowup.png"
import nextBtn from "../../assets/images/SOne_index_arrowdown.png"
import prevBtn1 from "../../assets/images/SOne_Mobile_arrow01.jpg"
import nextBtn1 from "../../assets/images/SOne_Mobile_arrow02.jpg"

export default function Banner() {

  const imageCarousel = [
    { image: banner, default: thmn2, active: thmn },
    { image: promo, default: promo, active: promo },
    { image: promo2, default: promo2, active: promo2 },
  ]

  const [display, setDisplay] = useState(0); // Use zero-based index

  const onPrev = () => {
    setDisplay((prev) => (prev === 0 ? imageCarousel.length - 1 : prev - 1));
  };

  const onNext = () => {
    setDisplay((prev) => (prev === imageCarousel.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex h-72 bg-black md:w-3/5 w-auto lg:w-auto">
      <div className="flex relative h-full">
        <img
          src={imageCarousel[display].image}
          alt={`Slide ${display + 1}`}
          className="lg:w-auto h-full object-cover"
        />
        <div className="absolute h-full flex-col top-0 right-0 flex justify-center mr-2">
          <button onClick={onPrev} className="px-4 py-2 hover:bg-black/50 flex rounded justify-center cursor-pointer">
            <img src={prevBtn} />
          </button>
          <div className="flex flex-col mt-1 gap-1">
            {imageCarousel.map((item, index) => (
              <img
                key={index}
                src={display === index ? item.active : item.default}
                alt={`Thumbnail ${index + 1}`}
                className={`w-32 h-12 object-cover cursor-pointer ${display === index ? "border-2 border-orange-500" : "border-2 border-white"
                  }`}
                onClick={() => setDisplay(index)}
              />
            ))}
          </div>
          <button onClick={onNext} className="px-4 mt-1 py-2 hover:bg-black/50 flex rounded justify-center cursor-pointer">
            <img src={nextBtn} />
          </button>
        </div>
      </div>
    </div>

  )
}
