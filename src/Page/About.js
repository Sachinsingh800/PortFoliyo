import React from 'react';
import ResponsiveAppBar from '../Component/ResponsiveAppBar';
import  style from "./About.module.css"
import Image from "./minion.png"
const About = () => {
  return (
    <>
    <ResponsiveAppBar />
    <div className={style.main}>
        <div className={style.left}>
        <h2>About Me</h2>
      <p>Hello there! My name is John and I'm a front-end developer with 5 years of experience. I love creating beautiful and responsive websites using modern web technologies.</p>
      <p>I have a strong passion for learning and always keep myself up-to-date with the latest trends and techniques in web development. My skills include HTML, CSS, JavaScript, React JS, and Redux.</p>
      <p>Before starting my career in web development, I worked as a graphic designer for 2 years. This experience gave me a solid foundation in design principles and a keen eye for aesthetics.</p>
      <p>In my free time, I enjoy hiking, photography, and playing video games. I also love to contribute to open-source projects and attend tech meetups to expand my knowledge and network with other developers.</p>
        </div>
     <div className={style.right}>
       <img className={style.img} src={Image} />
       
     </div>
      
    </div>
    </>
  );
};

export default About;
