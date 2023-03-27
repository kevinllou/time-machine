interface IUseTimeMachine<T> {
  lastValueStored: React.MutableRefObject<number | undefined>;
  timeIndex: number;
  isTraveling: boolean;
  history: T;
  updateHistory: (historyValue: T) => void;
  updateIndex: (index: number) => void;
  updateIsTraveling: (booleanValue: boolean) => void;
}
export default IUseTimeMachine;
