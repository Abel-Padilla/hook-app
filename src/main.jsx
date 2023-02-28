import React from 'react'
import ReactDOM from 'react-dom/client'
import { MultipleCustomHooks } from './03-examples'
//import { FocusScreen } from './04-useRef/FocusScreen'
import { Layout } from './05-useLayoutEffect/Layout'
import { MemoHook } from './06-memos/MemoHook'
import { Memorize } from './06-memos/Memorize'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <MultipleCustomHooks />
  //</React.StrictMode>,
)
