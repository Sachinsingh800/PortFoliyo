import React from 'react'
import ResponsiveAppBar from '../Component/ResponsiveAppBar'
import style from "./Project.module.css"
import { Link } from 'react-router-dom'

function Project() {
  return (
    <>
    <ResponsiveAppBar />
    <div className={style.main}>
      <h1>Projects</h1>
      <Link to={"https://twitter-ruddy-eta.vercel.app/"}> <img className={style.img} src={"https://i.tribune.com.pk/media/images/1201036-Twitterfreefall-1476711011/1201036-Twitterfreefall-1476711011.gif"} /></Link> 
      <Link to={"https://google-doc-xcqo.vercel.app/"}><img className={style.img} src={"https://cdn.dribbble.com/users/309027/screenshots/1907080/google-docs-animation-_2x.gif"} /></Link>
        <Link to={"https://cricket-live-oglr.vercel.app/"}><img className={style.img} src={"https://cdn.cloudflare.steamstatic.com/steam/apps/957070/extras/Intelligent_FieldingE1.gif?t=1627408609"} /></Link>
       <Link to={"https://github.com/Sachinsingh800/WeatherApp.git"}><img className={style.img} src={"https://i.pinimg.com/originals/0e/f3/bb/0ef3bb66d9216fffcea9022628f7bb26.gif"} /></Link> 
        <Link to={"https://photo-gallery-eight-iota.vercel.app/"}><img className={style.img} src={"https://cdn.dribbble.com/users/1419196/screenshots/3415939/20---photography.gif"} /></Link>
    </div>
    </>
  )
}

export default Project
