export type InitialState = {
  loadedSounds: loadedSounds;
  globalGainNode: GainNode | undefined;
  globalContext: AudioContext | undefined;
};

export type loadedSounds = Array<{
  soundURL: string;
  audioBuffer: AudioBuffer | 'loading';
  audioSource: AudioBufferSourceNode | 'loading';
}>;
