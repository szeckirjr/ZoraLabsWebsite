import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eduardo Szeckir Zora</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        
      <img class="profilepic" src="/profilepic.jpg" alt="Eduardo Szeckir picture"/>

        <h1 className={styles.title}>
          Hello! My name is <a>Eduardo Szeckir</a>
        </h1>

        <p className={styles.description}>
          Get started by learning{' '}
          <Link href="aboutme.js">
            <a>about me!</a>
          </Link>
        </p>

        <div className={styles.grid}>
          <a href="https://eszeckir.com" className={styles.card}>
            <h3>Portfolio Website &rarr;</h3>
            <p>A porfolio website I created from scratch using HTML, CSS, and JavaScript.</p>
          </a>

          <Link href="contact.js">
            <a className={styles.card}>
              <h3>Contact &rarr;</h3>
              <p>Find out how you can contact me.</p>
            </a>
          </Link>

          <a href="https://github.com/szeckirjr" className={styles.card}>
            <h3>GitHub Account &rarr;</h3>
            <p>Check out my GitHub account with some examples of codes I have worked on.</p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
