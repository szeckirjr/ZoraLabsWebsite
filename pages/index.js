import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eduardo Szeckir Zora</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        
      <img class="profilepic" src="/profilepic.jpg" alt="Eduardo Szeckir picture"/><br></br><br></br>

        <h1 className={styles.title}>
          Hello! My name is <a>Eduardo Szeckir</a>
        </h1>

        <div className={styles.grid}>
          <a href="https://eszeckir.com" className={styles.card}>
            <h3>Portfolio Website &rarr;</h3>
            <p>A porfolio website I created from scratch using HTML, CSS, and JavaScript.</p>
          </a>

          <a href="https://github.com/szeckirjr" className={styles.card}>
            <h3>GitHub Account &rarr;</h3>
            <p>Check out my GitHub account with some examples of codes I have worked on.</p>
          </a>
          <br></br><br></br>

          <h1 className={styles.title}>About me</h1>
          <p className={styles.description}>My name is Eduardo Szeckir, I am a third year Software Engineering student at the University of Victoria (UVic). I am originally from Porto Alegre, Brazil, but moved to Victoria, B.C. to pursue my degree in 2018. I love software and all its potential to improve people's lives in so many ways. I love learning new things and meeting new people, I think life is about experiencing the most you can so I am always after a challenge. On my free time, I enjoy reading, watching movies and tv shows, talking to people, and spending time outdoors. I am a very positive person and I believe I can achieve whatever I set my mind to.</p>

          <h1 className={styles.title}>Contact information</h1>
          <p className={styles.description}>
            <h3>You can reach me using the following:</h3>
            <strong>Email: </strong>eszeckirjr@gmail.com<br></br><br></br>
            <strong>Phone: </strong>+55-51-99849-6636 before April 2nd 2021<br></br>+1-250-415-5863 after April 2nd 2021
            <h3>If you feel like sending me a letter:</h3>
            <p>1919 San Fernando Place, Victoria, B.C., V8N 2G2</p>
          </p>
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
