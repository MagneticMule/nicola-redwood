import { useState } from 'react';
import styles from '../styles/Home.module.css';

const Day = ({ dayNum, date }) => {
  const [isDone, setIsDone] = useState(false);
  if (isDone)
    return (
      <aside>
        <h2 className={styles.card}>DAY is DONE</h2>
      </aside>
    );
  return (
    <>
      <a href='/day/{dayNum}' className={styles.card}>
        <h2>Day {dayNum} &rarr;</h2>
        <p>📅{date}</p>
      </a>
    </>
  );
};

export default Day;
