import { createSlice } from '@reduxjs/toolkit/dist';
import {
  AppendAudioPayload,
  AudioBufferType,
  AudioStatus,
  InitialState,
} from './type';
import type { PayloadAction } from '@reduxjs/toolkit';
import { whenAudioCanPlay } from 'src/hooks/useAudio';

const getAudioContext = () => {
  const globalContext = new AudioContext();
  const globalGainNode = globalContext.createGain();
  globalGainNode.gain.value = 0.6;
  globalGainNode.connect(globalContext.destination);

  return () => {
    return { globalContext, globalGainNode };
  };
};

const { globalContext, globalGainNode } = getAudioContext()();

const initialState: InitialState = {
  loadedSounds: [],
  globalContext,
  globalGainNode,
};

type PlayAudioPayload = {
  soundURL: string;
  continuous?: boolean | null;
};

export const soundSlice = createSlice({
  name: 'sound',
  initialState,
  reducers: {
    appendAudio(state, { payload }: PayloadAction<AppendAudioPayload>) {
      const { soundURL, audioBuffer, audioSource } = payload;

      let noInstance = true;
      state.loadedSounds = state.loadedSounds.map(sound => {
        if (soundURL === sound.soundURL) {
          noInstance = false;
          return {
            soundURL,
            audioBuffer,
            audioSource,
          };
        }

        return sound;
      });
      if (noInstance) {
        state.loadedSounds.push({
          soundURL,
          audioBuffer,
          audioSource,
        });
      }

      return state;
    },
    playAudio(state, { payload }: PayloadAction<PlayAudioPayload>) {
      const { soundURL, continuous } = payload;
      if (!state.globalGainNode || !state.globalContext) return;

      let audioBuffer: AudioBufferType | undefined = undefined;

      for (const loadedSound of state.loadedSounds) {
        if (loadedSound.soundURL === soundURL) {
          audioBuffer = loadedSound.audioBuffer;
        }
      }
      if (!audioBuffer || audioBuffer === AudioStatus.loading) return;
      const bufferSource = state.globalContext.createBufferSource();
      bufferSource.connect(state.globalGainNode);
      bufferSource.buffer = audioBuffer;

      soundSlice.caseReducers.appendAudio(state, {
        payload: {
          soundURL,
          audioBuffer,
          audioSource: bufferSource,
        },
        type: '',
      });

      if (continuous) {
        bufferSource.loop = true;

        whenAudioCanPlay(() => {
          bufferSource.start(0);
          console.log('playing ' + soundURL);
        });
      } else {
        bufferSource.start(0);
      }
    },
    stopAudio(state, { payload }: PayloadAction<{ soundURL: string }>) {
      const { soundURL } = payload;

      for (const loadedSound of state.loadedSounds) {
        if (loadedSound.soundURL === soundURL) {
          if (loadedSound.audioSource !== AudioStatus.loading)
            loadedSound.audioSource.stop();
        }
      }
    },
    setGlobalVolume(state, { payload }: PayloadAction<{ volume: number }>) {
      const { volume } = payload;

      if (!state.globalGainNode) return;

      state.globalGainNode.gain.value = volume;

      for (const loadedSound of state.loadedSounds) {
        if (loadedSound.audioSource !== AudioStatus.loading)
          loadedSound.audioSource.connect(state.globalGainNode);
      }
    },
  },
});
