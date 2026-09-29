import { useEffect, useState } from "react";

const colors = {
    red: 'w-32 h-32 bg-red-500 animate-pulse',
    yellow: 'w-32 h-32 bg-yellow-500 animate-pulse',
    green: 'w-32 h-32 bg-green-500 animate-pulse'
};

type TrafficLightColor = keyof typeof colors;

export const TrafficLightEffect = () => {

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
    

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
        <div className="flex flex-col items-center space-y-8">
          <h1 className="text-white text-3xl font-thin">El semáforo cambia en ...</h1>
          <h1 className="text-white text-2xl">{countdown}</h1>
          <div className={`w-32 h-32 ${ light === 'red'? colors[light] :'bg-gray-500'} rounded-full`}></div>
          <div className={`w-32 h-32 ${ light === 'yellow'? colors[light] :'bg-gray-500'} rounded-full`}></div>
          <div className={`w-32 h-32 ${ light === 'green'? colors[light] :'bg-gray-500'} rounded-full`}></div>
        </div>
      </div>
    );
  };