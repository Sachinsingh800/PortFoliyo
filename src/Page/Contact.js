import React from 'react'
import ResponsiveAppBar from '../Component/ResponsiveAppBar'
import style from "./Contact.module.css"
import image from "./pg.png"

function Contact() {
  return (
    <>
    <ResponsiveAppBar />
    <div className={style.main}>
      <h1>Contact page</h1>
      <img className={style.img} src={image} />
    </div>
    </>
  )
}

export default Contact
