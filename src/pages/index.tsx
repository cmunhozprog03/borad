import { GetStaticProps } from 'next'
import Head from 'next/head'
import styles from '../styles/styles.module.scss'

export default function Home() {
  return (
    <>
    <Head>
        <title>Board - Organizando suas tarefas</title>
    </Head>

    <main className={styles.contentContainer}>
      <img src="/images/board-user.svg" alt="Ferramenta Board" />

      <section className={styles.callToAction}>

        <h1>Uma ferramenta para o seu dia a dia, Ecsreva, planeje e organiza-se</h1>

        <p>
          <span>100% Gratuíta</span> e online
        </p>

      </section>

      <div className={styles.donaters}>
        <img src="/images/usuario.jpg" alt="usuário1" />
        <img src="/images/usuario.jpg" alt="usuário1" />
        <img src="/images/usuario.jpg" alt="usuário1" />
        <img src="/images/usuario.jpg" alt="usuário1" />
        <img src="/images/usuario.jpg" alt="usuário1" />


      </div>
    </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async() =>{
  return {
    props: {

    },
    revalidate: 60 * 60
  }
}
