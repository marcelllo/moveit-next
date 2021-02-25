import { useState, useEffect } from "react";

import styles from '../styles/components/ExperienceBar.module.css';

function ExperienceBar() {
  const [currentExperience, setCurrentExperience] = useState(50);

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${currentExperience}%` }}></div>
        <span
          className={styles.currentExperience}
          style={{ left: `${currentExperience}%` }}
        >
          {((currentExperience / 100) * 600).toFixed(0)} xp
        </span>
      </div>
      <span>600 xp</span>
    </header>
  );
}

export default ExperienceBar;
