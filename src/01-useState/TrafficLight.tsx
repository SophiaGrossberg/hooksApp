import { useState } from "react";

const colors = {
    red: 'w-32 h-32 bg-red-500 animate-pulse',
    yellow: 'w-32 h-32 bg-yellow-500 animate-pulse',
    green: 'w-32 h-32 bg-green-500 animate-pulse'
};

//type TrafficLightColor = 'red' | 'yellow' | 'green';
type TrafficLightColor = keyof typeof colors;

export const TrafficLight = () => {

    const [light, setLight] = useState<TrafficLightColor>('red')

    const handleClickRed = ()=>{setLight('red')}
    const handleClickYellow = ()=>{setLight('yellow')}
    const handleClickGreen = ()=>{setLight('green')}

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
        <div className="flex flex-col items-center space-y-8">
          <div className={`w-32 h-32 ${ light === 'red'? colors[light] :'bg-gray-500'} rounded-full`}></div>
          <div className={`w-32 h-32 ${ light === 'yellow'? colors[light] :'bg-gray-500'} rounded-full`}></div>
          <div className={`w-32 h-32 ${ light === 'green'? colors[light] :'bg-gray-500'} rounded-full`}></div>
  
          {/* Botón para cambiar el estado de la luz */}
          <div className="flex gap-2">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer"
              onClick={handleClickRed}
              >
              Rojo
            </button>
            <button
              className="bg-yellow-500 text-white px-4 py-2 rounded-md cursor-pointer"
              onClick={handleClickYellow}
              >
              Amarillo
            </button>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer"
              onClick={handleClickGreen}
              >
              Verde
            </button>
          </div>
        </div>
      </div>
    );
  };