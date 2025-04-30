import { create } from 'zustand';
import { IPredictions, IHistoryEntry } from '../types';

interface IGameState {
  guessDirection: IPredictions;
  sliderValue: number;
  history: IHistoryEntry[];
  setGuessDirection: (value: IPredictions) => void;
  setSliderValue: (value: number) => void;
  addHistory: (entry: IHistoryEntry) => void;
}

export const useGameStore = create<IGameState>((set) => ({
  guessDirection: 'Under',
  sliderValue: 1,
  history: [],
  setGuessDirection: (value) => set({ guessDirection: value }),
  setSliderValue: (value) => set({ sliderValue: value }),
  addHistory: (entry) =>
    set((state) => ({ history: [entry, ...state.history.slice(0, 9)] })),
}));
