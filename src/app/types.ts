export type IPredictions = 'Over' | 'Under';
export type IHistoryEntry = {
  time: string;
  guess: string;
  result: number;
  success: boolean;
};
