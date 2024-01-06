import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export interface ITask {
  id: string,
  name: string,
  isCompleted: boolean
}

export interface ITodoState {
  loading: boolean,
  error: boolean,
  data: ITask[],
}

const initialState: ITodoState = {
  loading: false,
  error: false,
  data: [],
};

const todoReducer = createSlice({
  name: 'Todolist',
  initialState: initialState,
  reducers: {
    createNewTask: (state, action) => {
      try {
        state.loading = true
        const taskObj: ITask = {
          id: uuidv4(),
          name: action.payload,
          isCompleted: false
        }
        state.data = [...state.data, taskObj]
        state.loading = false
      } catch (error) {
        state.loading = false
        state.error = true
      }
    },
    deleteTask: (state, action) => {
      let tasks = state.data.filter((task) => task.id !== action.payload)
      state.data = [...tasks]
    },
    completedToggle: (state, action) => {
      let tasks = state.data.map((task) => {
        if (task.id == action.payload) {
          task.isCompleted = !task.isCompleted
        }
        return task
      })
      state.data = [...tasks]
    },
    editTask: (state, action) => {
      let tasks = state.data.map((task) => {
        if (task.id == action.payload.id) {
          task.name = action.payload.name
        }
        return task
      })
      state.data = [...tasks]

    },
  }
});

export default todoReducer.reducer;

export const { createNewTask, deleteTask, completedToggle, editTask } = todoReducer.actions
