import { useState, useEffect, useContext } from "react";
import { ChallengeContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Countdown.module.css";

let countdownTimeout: NodeJS.Timeout;
const startTime = 0.1;

function Countdown() {

  const { startNewChallenge } = useContext(ChallengeContext);

  const [time, setTime] = useState(startTime * 60); // 25min * 60 para transformar em segundos
  const [isActive, setActive] = useState(false);
  const [hasFinished, setFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    setActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setActive(false);
    setTime(startTime * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time == 0) {
      setFinished(true);
      setActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  return (
    <>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      { hasFinished ? (
        <button
          className={styles.countdownButton}
          disabled>
          Ciclo encerrado
        </button>
      ): (
        <>
          { isActive ? (
            <button type="button" className={`${styles.countdownButton} ${styles.countdownButtonActive}`} onClick={resetCountdown}>
              Abandonar ciclo
            </button>
          ): (
            <button type="button" className={styles.countdownButton} onClick={startCountdown}>
              Iniciar um ciclo
            </button>
          )}
        </>
      )}

    </>
  );
}

export default Countdown;
