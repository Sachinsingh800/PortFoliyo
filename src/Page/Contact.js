import React from 'react'
import ResponsiveAppBar from '../Component/ResponsiveAppBar'
import style from "./Contact.module.css"

function Contact() {
  return (
    <>
    <ResponsiveAppBar />
    <div className={style.main}>
      <h1>Contact page</h1>
    </div>
    </>
  )
}

export default Contact
