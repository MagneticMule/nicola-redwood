import { useState } from 'react';
import React, { useContext } from "react";
import PresentContext from "../context/PresentContext";
import styles from '../styles/Home.module.css';
import Link from "next/link";
const Day = ({ dayNum, date }: { dayNum: number; date: string }) => {
  const TODAY = new Date();
  const D = new Date(date);
  const [isDone, setIsDone] = useState(D.getDate() < TODAY.getDate());
  const [isToday, setIsToday] = useState(D.getDate() === TODAY.getDate());
  const value = useContext(PresentContext);
  const setDayNum = value.setDayNum;
  const handleSetDay = () => {
    setDayNum(dayNum);
    console.log(`Day Number ${dayNum}`);
  }
  if (isDone)
    return (
      <div className={styles.card__inactive}>
        <h2>Day {dayNum} &rarr;</h2>
        <p>📅{new Date(date).toLocaleString('en-GB').slice(0, -10)}</p>
        <div className={styles.strokeleft} />
        <div className={styles.strokeright} />
      </div>
    );
  if (isToday)
    return (
      <>
      <Link href={'/day/'}>
        <a onClick={e=>handleSetDay()} className={styles.card}>
          <h2>Day {dayNum} &rarr;</h2>
          <p>📅{new Date(date).toLocaleString('en-GB').slice(0, -10)}</p>
        </a>
        </Link>
      </>
    );
  return (
    <>
      <div className={styles.card__inactive}>
        <h2>Day {dayNum} &rarr;</h2>
        <p>📅{new Date(date).toLocaleString('en-GB').slice(0, -10)}</p>
      </div>
    </>
  );
};

export default Day;
