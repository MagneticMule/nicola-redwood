import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
// import BirthdayAnimation from '../components/birthday';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nicola Redwood</title>
        <meta name='description' content='Nicola Redwood' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>

        <h3>NICOLAREDWOOD.COM</h3>

        <p className={styles.description}>
          <a className={styles.emph} href='mailto@nic@nicolaredwood.com'>
            📧 nic@nicolaredwood.com
          </a>
        </p>
      </main>
    </div>
  );
};

export default Home;
