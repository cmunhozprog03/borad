import Link from 'next/link'
import styles from './style.module.scss'

export function SupportBootn(){
  return (
    <div className={styles.donateContainer}>
      <Link href="/dobate">
        <button>Apoiar</button>
      </Link>
    </div>
  )
}