import { createSlice } from '@reduxjs/toolkit/dist';
import type { InitialState } from './type';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: InitialState = {
  loadedSounds: [],
  globalContext: undefined,
  globalGainNode: undefined,
};

initialState.globalContext = new AudioContext();
initialState.globalGainNode = initialState.globalContext.createGain();
initialState.globalGainNode.gain.value = 0.6;
initialState.globalGainNode.connect(initialState.globalContext.destination);

type AppendAudioPayload = {
  soundURL: string;
  audioBuffer: AudioBuffer | 'loading';
  audioSource: AudioBufferSourceNode | 'loading';
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
            soundURL: soundURL,
            audioBuffer: audioBuffer,
            audioSource: audioSource,
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

      let audioBuffer: 'loading' | undefined | AudioBuffer = undefined;
      for (const loadedSound of state.loadedSounds) {
        if (loadedSound['soundURL'] === soundURL) {
          audioBuffer = loadedSound['audioBuffer'];
        }
      }
      if (!audioBuffer || audioBuffer === 'loading') return;
      const bufferSource = state.globalContext.createBufferSource();
      bufferSource.connect(state.globalGainNode);
      bufferSource.buffer = audioBuffer;

      soundSlice.caseReducers.appendAudio(state, {
        payload: {
          soundURL: soundURL,
          audioBuffer: audioBuffer,
          audioSource: bufferSource,
        },
        type: '',
      });

      if (continuous) {
        bufferSource.loop = true;

        let testAudio: HTMLAudioElement | null =
          document.createElement('audio');
        testAudio.style.display = 'none';
        document.body.appendChild(testAudio);
        testAudio.src = '/audio/shoot1.mp3';
        testAudio.volume = 0;
        const tryToPlay = setInterval(() => {
          if (!testAudio) return;
          testAudio
            .play()
            .then(() => {
              bufferSource.start(0);
              clearInterval(tryToPlay);
              if (testAudio) testAudio.remove();
              testAudio = null;
            })
            .catch(() => {
              console.info('User has not interacted with document yet.');
            });
        }, 2000);
      } else {
        bufferSource.start(0);
      }
    },
    stopAudio(state, { payload }: PayloadAction<{ soundURL: string }>) {
      const { soundURL } = payload;

      for (const loadedSound of state.loadedSounds) {
        if (loadedSound.soundURL === soundURL) {
          if (loadedSound.audioSource !== 'loading')
            loadedSound.audioSource.stop();
        }
      }
    },
    setGlobalVolume(state, { payload }: PayloadAction<{ volume: number }>) {
      const { volume } = payload;
      if (!state.globalGainNode) return;
      state.globalGainNode.gain.value = volume;
      for (const loadedSound of state.loadedSounds) {
        if (loadedSound.audioSource !== 'loading')
          loadedSound.audioSource.connect(state.globalGainNode);
      }
    },
  },
});
