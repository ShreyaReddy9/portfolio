import React from 'react';
import { getImageUrl } from "../../utils";
import styles from './hero.module.css';
import { FaEnvelope} from 'react-icons/fa';
export const Hero= () => {
    return <section className={styles.container}>
       <div className={styles.content}>
       <h1 className={styles.typing}>Hi I'm Shreya.<span className={styles.cursor}>|</span></h1>

        <h4> I am a Full Stack Developer with a strong interest in field of Machine Learning.</h4>
       
        <a href="mailto:gudurushreya.16@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.contactBtn}><FaEnvelope className={styles.envelope} /> Say Hi!</a>
       </div> 
       
       <img src='/assets/hero/heroImage.png' alt="Hero img of me" className={styles.heroImg}/>
       <div className={styles.topBlur}></div>
       <div className={styles.bottomBlur}></div>

    </section>
     
    
}