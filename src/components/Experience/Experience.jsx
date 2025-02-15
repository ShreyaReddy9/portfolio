import React, { useState } from "react";
import history from "../../data/history.json";
import styles from "./Experience.module.css";

export const Experience = () => {
    const [selectedCompany, setSelectedCompany] = useState(history[0]); // Default to first company

    return (
        <section className={styles.container} id="experience">
            
       <div className={styles.bottomBlur}></div>
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>

                {/* Left Section: List of Companies */}
                <ul className={styles.companyList}>
                    {history.map((company, id) => (
                        <li 
                            key={id} 
                            className={`${styles.companyItem} ${selectedCompany === company ? styles.active : ""}`} 
                            onClick={() => setSelectedCompany(company)}
                        >
                            {company.organisation}
                        </li>
                    ))}
                </ul>

                {/* Right Section: Details (Shown when a company is clicked) */}
                <div className={styles.detailsPanel}>
                <h3>
                    {selectedCompany.role} @ <span className={styles.companyName}> {selectedCompany.organisation}</span>
                </h3>
                    <p>{`${selectedCompany.startDate} - ${selectedCompany.endDate}`}</p>
                    <ul>
                        {selectedCompany.experiences.map((experience, idx) => (
                            <li key={idx} className={styles.experienceItem}>{experience}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
