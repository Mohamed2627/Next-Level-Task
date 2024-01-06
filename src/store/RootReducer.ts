import { Reducer, combineReducers } from 'redux';
import todoReducer, { ITodoState } from "./slices/TodoSlice"

export interface IRootState {
  Todo: Reducer<ITodoState>
}

const rootRuducer = combineReducers<IRootState>({
  Todo: todoReducer,
});

export default rootRuducer;