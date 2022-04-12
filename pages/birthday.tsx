import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Day from '../components/day';
import styles from '../styles/Home.module.css';
import { DayData } from '../data/daydata';

const Birthday: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nicola Redwood</title>
        <meta name='description' content='Nicola is 45 on the 13th of April 2022' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className={styles.header}>
        <Image src='/bday.png' layout='fill' objectFit='contain' alt='Happy Birthday Nicola' />
      </header>
      <main className={styles.maim}>
        <div className={styles.container}>
          <h2>📅 Forty-Five years of living</h2>
          <h2>🥳 Five days of surprises</h2>
          <h2>
            <strong>👩🏻‍🦱One gorgeous woman</strong>
          </h2>
          <hr />
          <h1>How does this work?</h1>
          <p>
            <strong>My dearest Nicola, </strong>over the next five days you will have the opportunity to win a selection
            of birthday gifts. There are a number of great gifts on offer here but you have to wait for them. We
            can&#39;t go spoiling you now, can we dahling?
          </p>
          <p>At the bottom of this page are five little boxes, each of which contain a cheeky wee birthday treat.</p>
          <strong>
            Think of this as an Advent Calendar for your b&#39;day. So, only click on the appropriate box for that day.
            No cheating, or I&#39;ll know 👮🏻
          </strong>
          <p className={styles.description}>
            <strong>
              Happy Birthday <i>Baby!</i> 🥳
            </strong>
          </p>
          <div className={styles.grid}>
            {DayData.map((day, index) => (
              <Day key={index} dayNum={index + 1} date={day.date} />
            ))}
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href='https://seventhstage.uk' target='_blank' rel='noopener noreferrer'>
          Built with 💖 by Thomas D.P. Sweeney
        </a>
      </footer>
    </>
  );
};

export default Birthday;
