import React from 'react'
import { FilterSearchComponent, FormComponent, TaskComponent } from '../../components';
import "./style.css"
import { useSelector } from 'react-redux';
import { useData } from '../../hooks';

const TodoList = () => {
  // Hooks--------------------------
  const { renderData } = useData()

  return (
    <div className='todo-page-container'>
      <div className='form-title-container'>
        <h2>To Do</h2>
        <FormComponent />
        <FilterSearchComponent />
      </div>
      <div className='tasks-container'>
        {renderData.map((task) => <TaskComponent key={task.id} task={task} />)}
      </div>
    </div>
  )
}

export default TodoList