import type { RootState } from 'src/store';

export const all = (state: RootState) => state.sound;

export const loadedSounds = (state: RootState) => all(state).loadedSounds;
export const globalContext = (state: RootState) => all(state).globalContext;
export const globalGainNode = (state: RootState) => all(state).globalGainNode;
