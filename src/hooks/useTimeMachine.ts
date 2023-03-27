/* eslint-disable max-len */
import { useState, useEffect, useRef } from 'react';

function useTimeMachine<T>(initialValue: T): [number | undefined, T, React.Dispatch<React.SetStateAction<T>>] {
  const [history, setHistory] = useState<T>(initialValue);
  const lastValueStored = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (Array.isArray(history)) {
      lastValueStored.current = history[history.length - 1];
    }
  }, [history]);

  return [lastValueStored.current, history, setHistory];
}

export default useTimeMachine;
