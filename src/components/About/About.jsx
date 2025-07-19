import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";


export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About Me</h2>
            
       
            <div className={styles.content}> 
                
                {/* About Description (Left) */}
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src="/assets/about/serverIcon.png" alt="Server Icon" className={styles.icon} />
                        <div className={styles.aboutItemText}>
                            <p>I am a Master's graduate in Computer Science from San Diego State University, driven by a passion for technology and innovation. 
                                I design and develop scalable, high-performance digital solutions that meet the needs of modern businesses, 
                                ensuring efficiency and seamless user experiences. Beyond my technical work, I enjoy exploring scientific advancements and 
                                staying informed about breakthroughs across various fields.

                            </p>
                            <p> In my free time, I express creativity through painting and doodling, blending logic with artistry to fuel both my technical and creative pursuits..</p>
                        </div>
                        <div className={styles.bottomBlur}></div>
                    </li>
                </ul>

                {/* About Image (Right) */}
                <img src="/assets/about/aboutImage.png" alt="Me sitting with a laptop" className={styles.aboutImage} />
            </div>
            
        </section>
    );
};

