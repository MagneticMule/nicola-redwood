import { useState } from 'react';
import styles from '../styles/Home.module.css';

const Day = ({ dayNum, date }: { dayNum: number; date: string }) => {
  const TODAY = new Date();
  const D = new Date(date);
  console.log(D);
  console.log(date);
  console.log(TODAY);
  const [isDone, setIsDone] = useState(D.getTime() <= TODAY.getTime());
  if (isDone)
    return (
      <div className={styles.card}>
        <h2>Day {dayNum} &rarr;</h2>

        <p>📅{new Date(date).toLocaleString('en-GB').slice(0, -10)}</p>
        <div className={styles.strokeleft} />
        <div className={styles.strokeright} />
      </div>
    );
  return (
    <>
      <a href={'/birthday/' + dayNum} className={styles.card}>
        <h2>Day {dayNum} &rarr;</h2>
        <p>📅{new Date(date).toLocaleString('en-GB').slice(0, -10)}</p>
      </a>
    </>
  );
};

export default Day;
