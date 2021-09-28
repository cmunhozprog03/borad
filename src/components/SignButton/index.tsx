import { signIn, signOut, useSession } from 'next-auth/client'
import styles from './style.module.scss'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

export function SignButton(){

  const [session] = useSession();
  

  return session ? (
    <button
      type="button"
      className={styles.signButton}
      onClick={() => signOut()}
    >
      <img src={session.user.image} alt="foto do usuário" />
      Olá {session.user.name}
      <FiX color="#737830" className={styles.classIcon}/>
    </button>
  ) : (
    <button
      type="button"
      className={styles.signButton}
      onClick={() => signIn('github')}
    >
      <FaGithub color="#FFB800" />
      Entra com GitHub
    </button>
  )
}