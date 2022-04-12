import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nicola Redwood</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <strong>Gift 1 of 5</strong>
        <h1 className={styles.title}>Hello Nicola!</h1>
        <h2>This is your new website 😊</h2>
        <h3>NICOLAREDWOOD.COM</h3>

        <p className={styles.description}>
          You also have a nice new email address <br />
          <a className={styles.emph} href='mailto@nic@nicolaredwood.com'>
            📧 nic@nicolaredwood.com
          </a>
        </p>
        <p className={styles.description}>
          <strong>
            <Link href='/birthday'>
              <a className={styles.link}>
                Happy Birthday <i>Baby!</i> 🥳
              </a>
            </Link>
          </strong>
        </p>
      </main>

      <footer className={styles.footer}>
        <a href='https://seventhstage.uk' target='_blank' rel='noopener noreferrer'>
          Built with 💖 by Thomas D.P. Sweeney
        </a>
      </footer>
    </div>
  );
};

export default Home;
