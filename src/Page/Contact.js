import React from 'react'
import ResponsiveAppBar from '../Component/ResponsiveAppBar'
import style from "./Contact.module.css"
import image from "./pg.png"

function Contact() {
  return (
    <>
    <ResponsiveAppBar />
    <div className={style.main}>
      <div className={style.contain}>
      <h1>Contact page</h1>
      <h3>✉️ Email-sachinsinghgnc@gmail.com</h3>
      </div>

      <img className={style.img} src={image} />
    </div>
    </>
  )
}

export default Contact
