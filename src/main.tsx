import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { FocusScreen } from './04-useRef/FocusScreen'
//import { PokemonPage } from './03-examples/PokemonsPage'
//import { TrafficLighHook } from './02-useEffect/TrafficLightHook'
//import { TrafficLightEffect } from './02-useEffect/TrafficLightEffect'
// import { TrafficLight } from './01-useState/TrafficLight'

// import { HooksApp } from './HooksApp'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HooksApp/> */}
    {/* <TrafficLighHook/> */}
    <FocusScreen/>
  </StrictMode>,
)
