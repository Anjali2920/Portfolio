import React from "react";
import skills from "../../data/skills.json"
import { getImageUrl } from "../../utils";
import styles from "./Skills.module.css"

export const Skills = () =>{
    return <section id="skills" className={styles.container}>
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.skills}>
            {
                skills.map((skill,id) => {
                    return (
                        <div key="id" className={styles.skill}>
                            <div>
                                <img className={styles.skillImage} src={getImageUrl(skill.imageSrc)}/>
                            </div>
                            <p>{skill.title}</p>
                        </div>
                    )
                })
            }
        </div>
    </section>
}