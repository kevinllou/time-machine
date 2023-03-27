import { useState, useEffect, useRef } from 'react';
import IUseTimeMachine from '../interfaces/IUseTimeMachine';

function useTimeMachine<T>(initialValue: T): IUseTimeMachine<T> {
  const [history, setHistory] = useState<T>(initialValue);
  const lastValueStored = useRef<number | undefined>(undefined);
  const [timeIndex, setTimeIndex] = useState<number>(-1);
  const [isTraveling, setIsTraveling] = useState<boolean>(false);

  useEffect(() => {
    if (Array.isArray(history)) {
      lastValueStored.current = history[history.length - 1];
    }
  }, [history]);

  const updateHistory = (historyValue: T) => {
    setHistory(historyValue);
  };
  const updateIndex = (index: number) => {
    setTimeIndex(index);
  };
  const updateIsTraveling = (booleanValue: boolean) => {
    setIsTraveling(booleanValue);
  };

  return {
    lastValueStored,
    history,
    timeIndex,
    isTraveling,
    updateHistory,
    updateIndex,
    updateIsTraveling,
  };
}

export default useTimeMachine;
