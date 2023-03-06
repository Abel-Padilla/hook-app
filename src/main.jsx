import React from 'react'
import ReactDOM from 'react-dom/client'
import { MultipleCustomHooks } from './03-examples'
import { PokeList } from './03-examples/PokeList'
//import { FocusScreen } from './04-useRef/FocusScreen'
import { Layout } from './05-useLayoutEffect/Layout'
import { CallBack } from './06-memos/CallBack'
import { MemoHook } from './06-memos/MemoHook'
import { Memorize } from './06-memos/Memorize'
import { Padre } from './07-tarea-memo/Padre'
import './index.css'
import './08-useReducer/intro-reducer'
import { TodoApp } from './08-useReducer/TodoApp'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoApp></TodoApp>
  </React.StrictMode>,
)
