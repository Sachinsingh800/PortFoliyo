import React, { useState } from 'react'
import ResponsiveAppBar from '../Component/ResponsiveAppBar'
import LeftSection from '../Section/LeftSection'
import RightSection from '../Section/RightSection'

import style from "./HomePage.module.css"

function HomePage() {
    const [show,setShow] = useState(false)

  return (
    <>
    <ResponsiveAppBar />
   <div className={style.main}>
       <div className={style.left}>
          <LeftSection />
           </div>
       <div className={style.right}>
       <RightSection />
       </div>
        

   </div> 

    </>
  )
}

export default HomePage
