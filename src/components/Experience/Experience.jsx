import React from "react";

import history from "../../data/experience.json"
import { getImageUrl } from "../../utils";
import styles from "./Experience.module.css"

export const Experience = () =>{
    return <section id="experience" className={styles.container}>
        <h2 className={styles.title}>Experience</h2>
        <ul className={styles.history}>
            {
                history.map((historyItem,id)=>{
                    return(
                        <li key="id" className={styles.historyItem}>
                            <img src={getImageUrl(historyItem.imageSrc)} 
                            alt={`${historyItem.organisation} Logo`}/>
                            <div className={styles.historyItemDetails}>
                                <h3>{`${historyItem.role} , ${historyItem.organisation}`}</h3>
                                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                <ul>{
                                    historyItem.experience.map((exp,id)=>{
                                        return <li key="id"> <p>{exp}</p></li>
                                    })
                                    }</ul>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    </section>
}