import Rutas from './Rutas/Rutas';

import { Provider } from 'react-redux';
import rootReducer from './Reducer/Index';
import rootSaga from './Sagas/Index';
import createSagaMiddleware from '@redux-saga/core';
import { applyMiddleware, createStore } from 'redux';

import './App.css';

function App() {

  const sagasMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, applyMiddleware(sagasMiddleware))
  sagasMiddleware.run(rootSaga)

  return (
    <Provider store={store}>
      <div className="App">
        <Rutas />
      </div>
    </Provider>
  );
}

export default App;
