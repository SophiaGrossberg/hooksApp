import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ScrambleWords } from './05-useReducer/ScrambleWordsReducer'
//import { ScrambleWords } from './05-useReducer/ScrambleWordsUseState'
//import { TasksApp } from './05-useReducer/TaskApp'
//import { FocusScreen } from './04-useRef/FocusScreen'
//import { PokemonPage } from './03-examples/PokemonsPage'
//import { TrafficLighHook } from './02-useEffect/TrafficLightHook'
//import { TrafficLightEffect } from './02-useEffect/TrafficLightEffect'
// import { TrafficLight } from './01-useState/TrafficLight'
// import { HooksApp } from './HooksApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HooksApp/> */}
    {/* <TrafficLighHook/> */}
      <ScrambleWords/>
  </StrictMode>,
)
