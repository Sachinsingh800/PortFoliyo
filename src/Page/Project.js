import React from 'react'
import ResponsiveAppBar from '../Component/ResponsiveAppBar'
import style from "./Project.module.css"

function Project() {
  return (
    <>
    <ResponsiveAppBar />
    <div className={style.main}>
      <h1>Project page</h1>
        <img className={style.img} src={"https://i.tribune.com.pk/media/images/1201036-Twitterfreefall-1476711011/1201036-Twitterfreefall-1476711011.gif"} />
        <img className={style.img} src={"https://i.tribune.com.pk/media/images/1201036-Twitterfreefall-1476711011/1201036-Twitterfreefall-1476711011.gif"} />
        <img className={style.img} src={"https://i.tribune.com.pk/media/images/1201036-Twitterfreefall-1476711011/1201036-Twitterfreefall-1476711011.gif"} />
        <img className={style.img} src={"https://i.tribune.com.pk/media/images/1201036-Twitterfreefall-1476711011/1201036-Twitterfreefall-1476711011.gif"} />
        <img className={style.img} src={"https://i.tribune.com.pk/media/images/1201036-Twitterfreefall-1476711011/1201036-Twitterfreefall-1476711011.gif"} />
        <img className={style.img} src={"https://i.tribune.com.pk/media/images/1201036-Twitterfreefall-1476711011/1201036-Twitterfreefall-1476711011.gif"} />
    </div>
    </>
  )
}

export default Project
