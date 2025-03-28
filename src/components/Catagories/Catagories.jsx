import React, { useState } from 'react'
import tire from "../../assets/images/SOne_index_bt-tire.jpg"
import tire1 from "../../assets/images/SOne_index_bt-tire1.jpg"
import btBreak from "../../assets/images/SOne_index_bt-break.jpg"
import btBreak1 from "../../assets/images/SOne_index_bt-break1.jpg"
import batt from "../../assets/images/SOne_index_bt-battery.jpg"
import batt1 from "../../assets/images/SOne_index_bt-battery1.jpg"
import choke from "../../assets/images/SOne_index_bt-chokeup.jpg"
import choke1 from "../../assets/images/SOne_index_bt-chokeup1.jpg"
import oil from "../../assets/images/SOne_index_bt-oil.jpg"
import oil1 from "../../assets/images/SOne_index_bt-oil1.jpg"
import guar from "../../assets/images/SOne_index_bt-guarantee.jpg"
import guar1 from "../../assets/images/SOne_index_bt-guarantee1.jpg"


export default function Catagories() {

  const [hoveredImage, setHoveredImage] = useState(null);

  const handleMouseEnter = (index) => setHoveredImage(index);
  const handleMouseLeave = () => setHoveredImage(null);

  const catagories = [
    { defaultBtn: tire, hovered: tire1 },
    { defaultBtn: btBreak, hovered: btBreak1 },
    { defaultBtn: batt, hovered: batt1 },
    { defaultBtn: choke, hovered: choke1 },
    { defaultBtn: oil, hovered: oil1 },
    { defaultBtn: guar, hovered: guar1 },
  ]

  return (
    <div className={`grid grid-cols-3 lg:grid-cols-6 w-full h-auto items-center justify-center gap-2 my-2`}>
      {catagories.map(({ hovered, defaultBtn }, index) => (
        <img
          key={index}
          className='h-full w-full cursor-pointer'
          src={hoveredImage === index ? hovered : defaultBtn}
          alt={`image-${index}`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  )

}
