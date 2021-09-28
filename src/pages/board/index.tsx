import { useState, FormEvent } from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/client'

import styles from './style.module.scss'
import { FiPlus, FiCalendar, FiEdit2, FiTrash, FiClock } from 'react-icons/fi'
import { SupportBootn } from '../../components/SupportButton'

import firebase from '../../services/firebaseConnection'


interface BoardProps{
  user: {
    id: string;
    nome: string;
  }
}

export default function Board({ user }: BoardProps){

  const [input, setInput] = useState('');
  const [taskList, setTaskList] = useState([]);

  async function handleAddTask(e: FormEvent){
    e.preventDefault();

    if(input === ''){
      alert('Preencha alguma tarefa!')
      return;
    }

    await firebase.firestore().collection('tarefas')
    .add({
      created: new Date(),
      tarefa: input,
      userId: user.id,
      nome: user.nome
    })
    .then((doc)=>{
      console.log('CADASTRADO COM SUCESSO!')
    })
    .catch((err)=>{
      console.log('ERRO AO CADASTRAR: ', err)
    })

  }

  return (
    <>
    <Head>
      <title>Minhas Tarefas</title>
    </Head>
    <main className={styles.container}>

      <form onSubmit={handleAddTask}>
        <input 
          type="text"
          placeholder="Digite a sua tarefa..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          <FiPlus size={25} color="#17181f"/>
        </button>
      </form>

      <h1>Você tem 2 tarefas</h1>
      <section>
        <article className={styles.taskList}>
          <p>Aprender projetos Next Js e aplicando Firebase como backend</p>
          <div className={styles.actions}>
            <div>
              <div>
                <FiCalendar size={20} color="#FFB800" />
                <time>17 julho 2021</time>
              </div>
              <button>
                <FiEdit2 size={20} color="#FFF" />
                <span>Editar</span>
              </button>
            </div>

            <button>
              <FiTrash size={20} color="#FF3636" />
              <span>Excluir</span>
            </button>
          </div>
        </article>
      </section>
    </main>

    <div className={styles.vipContainer}>
      <h3>Obrigado por sua doação!</h3>
      <div>
        <FiClock size={28} color="#FFF" />
        <time>Última doação há 3 dias</time>
      </div>
    </div>

    <SupportBootn />

    </>
  )
}

// Vericar no lado de servidor
export const getServerSideProps: GetServerSideProps = async ({req}) => {
  
  const session = await getSession({req});

  if (!session?.id){
    //SE NÃO ESTIVER LOGADO REDIRECIONAMOS
    return{
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  
  const user = {
    nome: session?.user.name,
    id: session?.id
  }

  return{
    props: {
      user
    }
  }
}