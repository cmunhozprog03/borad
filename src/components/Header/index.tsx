import Link from 'next/link'
import { SignButton } from '../SignButton'
import style from './style.module.scss'

export function Header(){
  return(
    <header className={style.headerContainer}>
      <div className={style.headerContent}>
        <Link href="/">
          <img src="/images/logo.svg" alt="Logo Meu Board" />
        </Link> 
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/board">
            <a>Meu Board</a>
          </Link>
        </nav>
        
        <SignButton />
        
      </div>
    </header>
  )
}