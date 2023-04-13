import React from 'react'
import style from "./RightSection.module.css"
import image from "./dp.png"

function RightSection() {
  return (
    <div>
      <img className={style.img} src={image} />
    </div>
  )
}

export default RightSection
