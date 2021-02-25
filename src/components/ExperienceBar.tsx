import { useState, useEffect, useContext } from "react";
import { ChallengeContext } from "../contexts/ChallengesContext";

import styles from '../styles/components/ExperienceBar.module.css';

function ExperienceBar() {

  const { currentExperience, experienceToNextLevel } = useContext(ChallengeContext);

  const percentToNextLevel = ((currentExperience * 100) / experienceToNextLevel).toFixed(0);

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }}></div>
        <span
          className={styles.currentExperience}
          style={{ left: `${percentToNextLevel}%` }}
        >
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
}

export default ExperienceBar;
