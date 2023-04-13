import React from 'react'
import style from "./LeftSection.module.css"

function LeftSection() {
  return (
    <div className={style.main}>
      <h1 className={style.heading}>Hello<span className={style.hand}>👋🏼</span></h1>
      <div className={style.heading}><h4>i 'm Sachin Singh. Full Stack Developer, DevOps learning Practitioner,web Developer Enthusiast,Life longer learner.</h4></div>
    </div>
  )
}

export default LeftSection
