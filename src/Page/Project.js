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
        <img className={style.img} src={"https://cdn.dribbble.com/users/309027/screenshots/1907080/google-docs-animation-_2x.gif"} />
        <img className={style.img} src={"https://cdn.cloudflare.steamstatic.com/steam/apps/957070/extras/Intelligent_FieldingE1.gif?t=1627408609"} />
        <img className={style.img} src={"https://i.pinimg.com/originals/0e/f3/bb/0ef3bb66d9216fffcea9022628f7bb26.gif"} />
        <img className={style.img} src={"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d93f9c65397547.5af2fc5f3a71e.gif"} />
    </div>
    </>
  )
}

export default Project
