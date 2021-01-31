import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function AboutMe() {
  return (
    <>
    <Head>
        <title>About me - Eduardo Szeckir Zora</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <img class="profilepic" src="/profilepic.jpg" alt="Eduardo Szeckir picture"/>
      <h1 className={styles.title}>About me</h1>
      <h2 className={styles.description}>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <p>My name is Eduardo Szeckir, I am a third year Software Engineering student at the University of Victoria (UVic). I am originally from Porto Alegre, Brazil, but moved to Victoria, B.C. to pursue my degree in 2018. I love software and all its potential to improve people's lives in so many ways. I love learning new things and meeting new people, I think life is about experiencing the most you can so I am always after a challenge. On my free time, I enjoy reading, watching movies and tv shows, talking to people, and spending time outdoors. I am a very positive person and I believe I can achieve whatever I set my mind to.</p>
    </>
  )
}