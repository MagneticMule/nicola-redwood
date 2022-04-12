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
        <Image src='/bday.png' layout='fill' objectFit='contain' />
      </header>
      <main className={styles.maim}>
        <div className={styles.container}>
          <h1>
            📅 Forty-Five years of living
            <strong>
              <br />
              👩🏻‍🦱One gorgeous woman
            </strong>
            <br />
            🥳 Five days of surprises
          </h1>
          <hr />
          <h2>How does this work?</h2>
          <p>
            <strong>My dearest Nicola, </strong>over the next five days you will have the opportunity to win a selection
            of birthday gifts. There are a number of great gifts on offer here but you have to wait for them. We can't
            go spoiling you now, can we dahling?
          </p>
          <p>At the bottom of this page are five little boxes, each of which contain a cheeky wee birthday treat.</p>
          <p className={styles.description}>
            <strong>
              Happy Birthday <i>Baby!</i> 🥳
            </strong>
          </p>
          <div className={styles.grid}>
            {DayData.map((day, index) => (
              <Day dayNum={index + 1} date={new Date(day.date).toLocaleString('en-GB').slice(0, -10)} />
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