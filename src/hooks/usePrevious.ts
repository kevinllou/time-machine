import { useState, useEffect, useRef } from 'react';

type GetterFunction = (index: number) => number | undefined;

function useTimeMachine(initialValue: number): [number | undefined, GetterFunction] {
  const [storedStates, setStoredStates] = useState<number[]>([initialValue]);
  const lastValueStored = useRef<number>();

  useEffect(() => {
    if (initialValue === 0) {
      lastValueStored.current = undefined;
    } else {
      lastValueStored.current = initialValue;
      setStoredStates((prevStoredStates) => [...prevStoredStates, initialValue]);
    }
  }, [initialValue]);

  const getValue: GetterFunction = (index) => {
    const valueIndex = storedStates.length - 1 - index;
    return storedStates[valueIndex];
  };

  return [lastValueStored.current, getValue];
}

export default useTimeMachine;
