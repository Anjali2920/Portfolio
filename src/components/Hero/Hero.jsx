import React from "react";

import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () =>{
    return  <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Anjali</h1>
            <p className={styles.description}>Im a full stack developer with 3 years of experience. Reach out if you'd like to learn more!</p>
            <a href="mailto:anjalia1719@gmail.com" className={styles.contactBtn}>Contact me</a>
        </div>
        <img src={getImageUrl("hero/myImage.jpeg")} className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>

}