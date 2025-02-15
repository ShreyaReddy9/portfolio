import React, { useState } from "react";
import styles from "./Skills.module.css";
import skillsData from "../../data/skills.json"; // Import JSON file

export const Skills = () => {
    const [activeTab, setActiveTab] = useState("Frontend");

    return (
        <section className={styles.skillsSection}>
            <h2 className={styles.title}>SKILLS</h2>
            <p className={styles.subtitle}>Here are some tools and technologies I enjoy working with</p>

            {/* Tab Switcher */}
            <div className={styles.tabs}>
                {skillsData.map((category) => (
                    <button 
                        key={category.category} 
                        className={`${styles.tabButton} ${activeTab === category.category ? styles.active : ""}`}
                        onClick={() => setActiveTab(category.category)}
                    >
                        {category.category}
                    </button>
                ))}
            </div>

            {/* Skill Cards */}
            <div className={styles.skillsGrid}>
                {skillsData
                    .find((category) => category.category === activeTab)
                    .skills.map((skill, index) => (
                        <div key={index} className={styles.skillCard}>
                            <img src={skill.imgSrc} alt={skill.name} className={styles.skillIcon} />
                            <h3 className={styles.skillName}>{skill.name}</h3>
                            <p className={styles.skillDescription}>{skill.description}</p>
                        </div>
                    ))}
            </div>
        </section>
    );
};
