import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () =>{
    return <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <p className={styles.about}>Passionate web application developer with a background in computer science, excelling at Nowce Ltd in creating responsive and interactive user interface. In my current role as a full stack developer, I utilize Angular for front-end development and Express.js for backend solutions, integrating technologies like Docker and Redis Database to create a solution to be applied within the graduation assessment process at a Russell group level university. Skilled in Angular, Express.js, and React, with a strong focus on optimizing performance and integrating RESTful APIs. Holds an MSc in Artificial Intelligence and Big Data and a B.Tech in Computer Science and Engineering. Proven ability to adapt to new technologies, collaborate effectively with cross-functional teams, and deliver seamless single-page applications.Let's connect and explore how my skills and experiences can contribute to your next project. Feel free to reach out!</p>

        </div>
    </section>
}