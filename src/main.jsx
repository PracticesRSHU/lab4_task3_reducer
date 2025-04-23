import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
// redux-react without toolkit
import { createStore } from 'redux';
import { counterReducer } from './store/reducers/counterReducer.js';
import rootReducer from './store/root.reducer.js'
import CounterProvider from './context/counterContextWithReducer.jsx'
// const store = createStore(counterReducer);
const store = createStore(rootReducer);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <CounterProvider>
        <App />
      </CounterProvider>
    </Provider>
  </StrictMode>,
)
