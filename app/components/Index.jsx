'use client'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import styles from '../styles.module.css'

const TodoApp = () => {
  const [taskInput, setTaskInput] = useState('')
  const [tasks, setTasks] = useState([])
  const [selectedRecord, setSelectedRecord] = useState(null)

  const handleTaskInput = e => {
    setTaskInput(e.target.value)
  }

  const handleAddTask = () => {
    if(selectedRecord !== null){
        setTasks(tasks.map((task) => {
            if(task.id === selectedRecord.id){
                return {...task , title : taskInput}
            }
            return task;
        }))
        setSelectedRecord(null);
    }
    else{
        setTasks(preState => [...preState, { id: nanoid(), title: taskInput }])
    }
    
    setTaskInput('')
  }

  const handleDeleteTask = id => {
    setTasks(tasks.filter(el => el?.id !== id))
    setTaskInput('')
  }

  const handleEditTask = id => {
    const record = tasks.find(el => el.id === id)
     setSelectedRecord(record)
    setTaskInput(record.title)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.appContainer}>
        <div className={styles.form}>
          <div className={styles.formItem}>
            <input
              className={styles.inputText}
              onChange={handleTaskInput}
              value={taskInput}
            />
          </div>
          <div className={styles.formItem}>
            <button className={styles.btn} onClick={handleAddTask}>Add</button>
          </div>
        </div>
        <div className={styles.list}>
          <table className={styles.table}>
            <thead className={styles.tableHeader}>
              <tr className={styles.tableRow}>
                <th className={styles.tableTh}>Index</th>
                <th className={styles.tableTh}>Task</th>
                <th className={styles.tableTh}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((el, index) => {
                return (
                  <tr>
                    <td className={styles.tableTd}>{index + 1}</td>
                    <td className={styles.tableTd}>{el.title}</td>
                    <td className={styles.tableTd}>
                      <button
                        className={styles.btn}
                        onClick={() => handleDeleteTask(el.id)}
                      >
                        Delete
                      </button>
                      <button
                        className={styles.btn}
                        onClick={() => handleEditTask(el.id)}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default TodoApp