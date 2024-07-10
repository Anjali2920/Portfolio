import React from "react";

import styles from './Contact.module.css';
import { getImageUrl } from "../../utils";

export const Contact = () =>{
    return <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon"/>
                <a href="mailto:anjalia1719@gmail.com">anjalia1719@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin Icon"/>
                <a href="https://www.linkedin.com/in/anjali-s-kumar-812433212/">LinkedIn</a>
            </li>
        </ul>
        
    </footer>
}