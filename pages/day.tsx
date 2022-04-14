import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import {DayData} from '../data/daydata';
import { useState } from 'react';
import PresentContext from '../context/PresentContext';

// interface DayOfWeekProps {
//   dayNum: number;
//   imageHref: string;
//   description: string;
// }

const DayOfWeek: NextPage = () => {
  const [dayNum, setDayNum] = useState(2);
  return (
    <PresentContext.Provider value={{ dayNum, setDayNum }}>
    <>
      <Head>
        <title>Nicola Redwood: Five Days of 45 - Day {dayNum}</title>
        <meta name='description' content='Nicola is 45 on the 13th of April 2022, this is one of her presents' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* <header className={styles.header}>
        </header> */}
      <main className={styles.main}>
        <div className={styles.container}>
          <Image src={DayData[dayNum-1].href} layout='fill' objectFit='contain' alt='Happy Birthday Baby' />
          <p>Gift {dayNum} of 5</p>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href='https://seventhstage.uk' target='_blank' rel='noopener noreferrer'>
          Built with 💖 by Thomas D.P. Sweeney
        </a>
      </footer>
    </>
    </PresentContext.Provider>
  );
};

export default DayOfWeek;
