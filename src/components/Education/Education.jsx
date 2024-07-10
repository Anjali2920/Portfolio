import React from "react";

import styles from './Education.module.css'

export const Education = () =>{
     return <section className={styles.container}>
        <h2 className={styles.title}>Education</h2>
            <ul className={styles.section}>
                <li className={styles.educationItems}>
                    <h3>Msc Artificial Intelligence and Big Data</h3>
                    <p>Anglia Ruskin University, Cambridge UK | September 2021 - June 2023</p>
                </li>
                <li className={styles.educationItems}>
                    <h3>B.Tech Computer Science and Engineering</h3>
                    <p>Muthoot Institute of Technology and Science</p>
                </li>
            </ul>
     </section>
}