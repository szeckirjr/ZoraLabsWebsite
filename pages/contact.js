import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Contact() {
  return (
    <>
    <Head>
        <title>Contact - Eduardo Szeckir Zora</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <img class="profilepic" src="/profilepic.jpg" alt="Eduardo Szeckir picture"/>
      <h1 className={styles.title}>Contact information</h1>
      <h2 className={styles.description}>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <h3>You can reach me using the following:</h3>
      <h4>Email: </h4><p>eszeckirjr@gmail.com</p>
      <h4>Phone: </h4><p>250-415-5863</p>
      <h3>If you feel like sending me a letter:</h3>
      <h4>1919 San Fernando Place, Victoria, B.C., V8N 2G2</h4>
    </>
  )
}