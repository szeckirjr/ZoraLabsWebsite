import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function AboutMe() {
  return (
    <>
    <Head>
        <title>Eduardo Szeckir Zora</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <img src="/profilepic.jpg" alt="Eduardo Szeckir picture"/>
      <h1 className={styles.title}>About me</h1>
      <h2 className={styles.description}>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}