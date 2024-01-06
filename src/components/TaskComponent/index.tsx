import React, { useRef, useState } from 'react';
import './style.css'
import { IconButton, TextInput } from '../../UI';
import { IoTrashSharp, IoPencilSharp, IoSaveOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { completedToggle, deleteTask, editTask } from '../../store';
import { isEmptyInput } from '../../utils';


const TaskComponent = ({ task }) => {

  // Refs--------------------------------------
  const inputRef = useRef<HTMLInputElement>(null);

  // Hooks-------------------------------------
  const dispatch = useDispatch();

  // State-------------------------------------
  const [editedInput, setEditedInput] = useState(task?.name);
  const [editToggle, setEditToggle] = useState(false);
  const [remove, setRemove] = useState(false)

  // Functions
  const handleCheckboxChange = () => {
    dispatch(completedToggle(task.id))
  }

  const onEditingTask = () => {
    setEditToggle(true);
    inputRef.current?.focus()
  }

  const onSavingChanges = () => {
    if (isEmptyInput(editedInput)) {
      alert("Empty Task is not allowed")
    } else {
      setEditToggle(false);
      let payload = { id: task.id, name: editedInput.trim() }
      dispatch(editTask(payload))
    }
  }

  const onRemovingTask = () => {
    setRemove(true)
    setTimeout(() => {
      dispatch(deleteTask(task?.id))
    }, 1000)
  }

  return (
    <div
      className={remove ? 'task-container remove' : "task-container"}>
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={handleCheckboxChange}
        className='checkbox-input'
      />
      <TextInput
        ref={inputRef}
        value={editedInput}
        setValue={setEditedInput}
        readOnly={!editToggle}
        style={{ borderWidth: 0, textDecoration: task.isCompleted ? "line-through" : "none" }}
      />
      <IconButton icon={<IoTrashSharp size={25} color='red' />} onClick={onRemovingTask} />
      {editToggle ? <IconButton icon={<IoSaveOutline size={25} color='blue' />} onClick={onSavingChanges} /> : <IconButton icon={<IoPencilSharp size={25} color='red' />} onClick={onEditingTask} />}
    </div>
  )
}

export default TaskComponent 