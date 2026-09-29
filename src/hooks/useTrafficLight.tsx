import { useEffect, useState } from "react";

const colors = {
    red: 'w-32 h-32 bg-red-500 animate-pulse',
    yellow: 'w-32 h-32 bg-yellow-500 animate-pulse',
    green: 'w-32 h-32 bg-green-500 animate-pulse'
};

type TrafficLightColor = keyof typeof colors;

export const useTrafficLight = () => {

    const [light, setLight] = useState<TrafficLightColor>('red')
    const [countdown, setCountdown] = useState(10)

    useEffect(() => {
      if (countdown === 0) return;

      const intervalID = setInterval(()=>{
      setCountdown((prev) => prev -1)
    }, 1000);
    
      return () => {
        clearInterval(intervalID)
      }
    }, [countdown])

    useEffect(() => {
      if (countdown === 0){
        setCountdown(10)
      if (light === 'red'){
        setLight('green');
        return
      }
      if(light === 'green'){
        setLight("yellow");
        return
      }
      if(light === "yellow"){
        setLight('red')
        return;
      }
    }
    }, [countdown, light])

    return{
        light, countdown, colors,
        
        redLight: light === 'red'? colors[light] :'bg-gray-500',
        yellowLight: light === 'yellow'? colors[light] :'bg-gray-500',
        greenLight: light === 'green'? colors[light] :'bg-gray-500'
    }

}