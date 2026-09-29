import { useTrafficLight } from "../hooks/useTrafficLight";

export const TrafficLighHook = () => {

const {countdown, redLight, yellowLight, greenLight } = useTrafficLight();

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
        <div className="flex flex-col items-center space-y-8">
          <h1 className="text-white text-3xl font-thin">El semáforo cambia en ...</h1>
          <h1 className="text-white text-2xl">{countdown}</h1>
          <div className={`w-32 h-32 ${redLight } rounded-full`}></div>
          <div className={`w-32 h-32 ${yellowLight } rounded-full`}></div>
          <div className={`w-32 h-32 ${greenLight } rounded-full`}></div>
        </div>
      </div>
    );
  };