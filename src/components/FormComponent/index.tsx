import React, { useState } from 'react';
import "./style.css"
import { TextButton, TextInput } from '../../UI';
import { useDispatch } from 'react-redux';
import { createNewTask } from '../../store';
import { isEmptyInput } from '../../utils';

const FormComponent = () => {
  // Hooks------------------------
  const dispatch = useDispatch()

  // State------------------------
  const [taskInput, setTaskInput] = useState<string>("")

  // Functions-------------------
  const onAddingTask = () => {
    if (isEmptyInput(taskInput)) {
      alert("Empty Task is not allowed")
    } else {
      dispatch(createNewTask(taskInput.trim()))
      setTaskInput("")
    }
  }

  return (
    <div className='form-container'>
      <TextInput value={taskInput} setValue={setTaskInput} placeholder='Write your Task' />
      <TextButton text='Add Task' onClick={onAddingTask} />
    </div>
  )
}

export default FormComponent