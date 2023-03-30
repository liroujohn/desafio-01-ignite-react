import { Check, Trash } from 'phosphor-react'
import { useState } from 'react';
import { ITask } from '../App';
import styles from './Task.module.css'

interface taskProps {
    task: ITask,
    deleteTask: ( deleteTaskById: number ) => void,
    checkTask: ( idTask: number ) => void,
}

export function Task({ task, deleteTask, checkTask }: taskProps) {
    
    function deleteTaskNow() {
        deleteTask(task.id)   
    }

    function checkDoneTaskById() {
        checkTask(task.id)   
    }
    
    return (
        <div className={styles.task}>
            <div>
                <input 
                    type='checkbox'
                    onClick={checkDoneTaskById}
                />
            </div>

            <p className={task.done === true ? styles.done : ''}>
                {task.nameTask}
            </p>

            <button onClick={deleteTaskNow} title='Deletar tarefa'>
                <Trash size={20}/>  
            </button>
        </div>      
    );
}