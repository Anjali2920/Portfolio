import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () =>{
    return <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <p className={styles.about}>Passionate Full Stack Developer with expertise in Angular, Express.js, and AWS.I hold an MSc in AI and Big Data and a BSc in Computer Science. Skilled in developing scalable web apps, integrating APIs, and optimizing performance.I create responsive UIs using Angular and have experience with Agile methodologies. Proficient in TypeScript, JavaScript, Python, Java, HTML5, CSS, and various frameworks.AWS certified and always eager to take on new challenges</p>
        </div>
    </section>
}