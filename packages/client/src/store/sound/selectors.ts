import type { RootState } from 'src/store';

export const all = (state: RootState) => state.sound;

export const soundSources = (state: RootState) => all(state).soundSources;
