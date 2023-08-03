import { Header } from './components/Header';
import { ChangeEvent, useState } from 'react';

import clickLogo from './assets/click.svg';
import Clipboard from './assets/Clipboard.svg';

import styles from './App.module.css';
import './StylesGlobal/global.css';
import { Task } from './components/Task';


export interface ITask {
  id: number,
  nameTask: string,
  done: boolean,
}


export function App() {
  const [taskText, setTaskText] = useState<string>('')
  const [taskList, setTaskList] = useState<ITask[]>([])

  //gerar Id aleatorio para a Atask e adicionar Atask
  function addTask() {
    const idRandom = (num: number) => Math.floor( Math.random() * num )

    // console.log(idRandom(999));

    if(taskText === '') {
      alert('Digite uma tarefa')
      return
    }

    const newTask = {
      id: idRandom(1000) + 1 ,
      nameTask: taskText,
      done: false
    }

    setTaskList([...taskList, newTask]) //armazenar as tasks antigas e add novas
    setTaskText('')   
    
  }

  //deletar task
  function deleteTask(deleteTaskById: number) {
    setTaskList(taskList.filter(taskName => taskName.id !== deleteTaskById ))
  }

  function checkDoneTaskById(idTask: number) {
    const newTaskList = taskList.map(item => {
      if(item.id === idTask) {
        item.done = !item.done
      }
      return item;
    })
    
    setTaskList(newTaskList)
  }

  function newTackTextOnChange(event: ChangeEvent<HTMLInputElement>) {
    setTaskText(event.target.value)
  }
  
  
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <input
          name='task'
          type="text" 
          placeholder="Adicione uma nova tarefa"
          value={taskText}
          onChange={newTackTextOnChange}
          required
          />
        
          <button 
            type='submit' 
            onClick={addTask}
          >
            Criar
            <img src={clickLogo} />
          </button>
      </div>

      <div className={styles.tasks}>
        <section>
          <article>
            Tarefas criadas <p>{taskList.length}</p>
          </article>
          <article>
            Concluídas <p>{taskList.filter(item => item.done === true).length} de {taskList.length}</p>
          </article>
        </section>
          
        <div className={taskList.length === 0 ? styles.tasksdiv : styles.messageTask}>
          <img src={Clipboard}/>
          <p>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>

      </div>

      <div className={styles.onTasks}>
        {taskList.map((task, id) => (          
          <Task 
            task={task}
            key={id}
            deleteTask={deleteTask}
            checkTask={checkDoneTaskById}
          />
        ))}    
      </div>
    </div>
  )
}


