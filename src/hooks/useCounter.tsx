import { useState } from "react"

export const useCounter = () => {
    const [counter, setCounter] = useState(1)

    const increment = ()=>{
        setCounter(counter +1)
    }
    const decrement = ()=>{
        if(counter <= 1) return;
        setCounter(counter - 1)
    }

  return{
    counter, increment, decrement
  }
}
