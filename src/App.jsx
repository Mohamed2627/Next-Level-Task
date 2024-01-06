import './App.css'
import { TodoList } from './Pages'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store'
import { FilterProvider } from './context'

function App() {

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <FilterProvider>
            <TodoList />
          </FilterProvider>
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
