import { useState } from "react";



export default function useSteps(initial) {
  const [step, setStep] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = function (newStep, replace = false) {
    setStep(newStep);
    if (replace) {
      let newHistory = [...history];
      newHistory = newHistory.slice(0, -1);
      newHistory = [...newHistory, newStep];
      newHistory = newHistory.splice(newHistory.lenagth - 1, 1, newStep);
      setHistory(newHistory);
    } else {
      setHistory(prev => ([...prev, newStep]));
    }
  }

  const back = function () {

    let newHistory = [...history];
    if (newHistory.length > 1) {
      newHistory = newHistory.slice(0, -1);
    }
    setHistory(newHistory);
    setStep(newHistory[newHistory.length - 1]);

  }
  return { step, transition, back };
}