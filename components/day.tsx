import { useState } from 'react';
import styles from '../styles/Home.module.css';

const Day = ({ dayNum, date }: { dayNum: number; date: string }) => {
  const TODAY = new Date();
  const D = new Date(date);
  const [isDone, setIsDone] = useState(D.getTime() <= TODAY.getTime());
  if (isDone)
    return (
      <div className={styles.card}>
        <h2>Day {dayNum} &rarr;</h2>
        <p>📅{date}</p>
        <div className={styles.strokeleft} />
        <div className={styles.strokeright} />
      </div>
    );
  return (
    <>
      <a href={'/birthday/' + dayNum} className={styles.card}>
        <h2>Day {dayNum} &rarr;</h2>
        <p>📅{date}</p>
      </a>
    </>
  );
};

export default Day;
