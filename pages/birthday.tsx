import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Day from '../components/day';
import styles from '../styles/Home.module.css';

const Birthday: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nicola Redwood</title>
        <meta name='description' content='Nicola is 45 on the 13th of April 2022' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className={styles.header}>
        <Image src='/bday.png' width='800px' height='800px' />
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
            of birthday gifts. There are a number of great prizes on offer here but you have to be in it to win it.
          </p>
          <p>
            At the bottom of this page are five little boxes, each of which contain a birthday 
          </p>
          <p className={styles.description}>
            <strong>
              Happy Birthday <i>Baby!</i> 🥳
            </strong>
          </p>
          <div className={styles.grid}>
            <Day dayNum={1} date={'13/04/2022'} />
            <a href='https://nextjs.org/learn' className={styles.card}>
              <h2>Day 2 &rarr;</h2>
              <p>14/04/2022</p>
            </a>

            <a href='https://github.com/vercel/next.js/tree/canary/examples' className={styles.card}>
              <h2>Day 3 &rarr;</h2>
              <p>15/04/2022</p>
            </a>

            <a
              href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
              className={styles.card}>
              <h2>Day 4 &rarr;</h2>
              <p>16/04/2022</p>
            </a>
            <a
              href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
              className={styles.card}>
              <h2>Day 5 &rarr;</h2>
              <p>17/04/2022</p>
            </a>
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
