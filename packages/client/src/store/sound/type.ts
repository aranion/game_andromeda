export type InitialState = {
  loadedSounds: LoadedSounds;
  globalGainNode: GainNode;
  globalContext: AudioContext;
};

export type AppendAudioPayload = {
  soundURL: string;
  audioBuffer: AudioBufferType;
  audioSource: AudioBufferSourceNode | keyof typeof AudioStatus;
};

export type LoadedSounds = Array<AppendAudioPayload>;
export type AudioBufferType = keyof typeof AudioStatus | AudioBuffer;

export enum AudioStatus {
  loading = 'loading',
}
