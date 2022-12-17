import { createSlice } from '@reduxjs/toolkit/dist';
import type { InitialState } from './type';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: InitialState = {
  soundURLs: [],
  soundSources: [],
  globalVolume: false,
};

export const soundSlice = createSlice({
  name: 'sound',
  initialState,
  reducers: {
    addSound(
      state,
      {
        payload,
      }: PayloadAction<{
        soundURL: string;
        playWhenLoaded?: 'continuous' | 'once';
      }>
    ) {
      const { soundURL, playWhenLoaded } = payload;
      const mime = 'audio/mpeg';
      if (state.soundURLs.includes(soundURL) || !checkMediaSourceSupport(mime))
        return;
      const audio = document.createElement('audio');
      audio.style.display = 'none';
      audio.textContent = 'loading';
      document.body.appendChild(audio);
      const mediaSource = new MediaSource();
      const mediaSourceURL = URL.createObjectURL(mediaSource);
      audio.src = mediaSourceURL;
      mediaSource.addEventListener('sourceopen', () => {
        const sourceBuffer = mediaSource.addSourceBuffer(mime);
        fetchAB(`/audio/${soundURL.toString()}`, function (buf) {
          sourceBuffer.addEventListener('updateend', function () {
            mediaSource.endOfStream();
            audio.textContent = soundURL;
            console.log('added sound: ' + soundURL);
            if (playWhenLoaded) {
              if (playWhenLoaded === 'continuous') {
                audio.ontimeupdate = () => {
                  if (audio.currentTime === audio.duration) {
                    audio.currentTime = 0;
                    audio.play();
                  }
                };
                const tryToPlay = setInterval(() => {
                  audio
                    .play()
                    .then(() => {
                      clearInterval(tryToPlay);
                    })
                    .catch(() => {
                      console.info(
                        'User has not interacted with document yet.'
                      );
                    });
                }, 2000);
              } else {
                audio.play();
              }
            }
          });
          sourceBuffer.appendBuffer(buf);
        });
      });
      state.soundSources.push(audio);
      state.soundURLs.push(soundURL);
    },
    playSound(
      state,
      {
        payload,
      }: PayloadAction<{
        soundURL: string;
        continuous?: boolean | null;
        volume?: number;
      }>
    ) {
      const { soundURL, continuous, volume } = payload;
      const mime = 'audio/mpeg';
      if (!state.soundURLs.includes(soundURL) || !checkMediaSourceSupport(mime))
        return;
      for (const soundSource of state.soundSources) {
        if (soundSource.src && soundSource.textContent === soundURL) {
          if (state.globalVolume !== false) {
            soundSource.volume = state.globalVolume;
          } else if (volume) {
            soundSource.volume = volume;
          } else {
            soundSource.volume = 1;
          }
          if (continuous) {
            soundSource.ontimeupdate = () => {
              if (soundSource.currentTime === soundSource.duration) {
                soundSource.currentTime = 0;
                soundSource.play();
              }
            };
            const tryToPlay = setInterval(() => {
              soundSource
                .play()
                .then(() => {
                  clearInterval(tryToPlay);
                })
                .catch(() => {
                  console.info('User has not interacted with document yet.');
                });
            }, 2000);
          } else {
            soundSource.play();
          }
        }
      }
    },
    stopSound(state, { payload }: PayloadAction<{ soundURL: string }>) {
      const { soundURL } = payload;
      const mime = 'audio/mpeg';
      if (!state.soundURLs.includes(soundURL) || !checkMediaSourceSupport(mime))
        return;
      for (const soundSource of state.soundSources) {
        if (soundSource.src && soundSource.textContent === soundURL) {
          soundSource.pause();
          soundSource.currentTime = 0;
        }
      }
    },
    pauseSound(state, { payload }: PayloadAction<{ soundURL: string }>) {
      const { soundURL } = payload;
      const mime = 'audio/mpeg';
      if (!state.soundURLs.includes(soundURL) || !checkMediaSourceSupport(mime))
        return;
      for (const soundSource of state.soundSources) {
        if (soundSource.src && soundSource.textContent === soundURL) {
          soundSource.pause();
        }
      }
    },
    setGlobalVolume(
      state,
      { payload }: PayloadAction<{ volume: InitialState['globalVolume'] }>
    ) {
      const { volume } = payload;
      for (const soundSource of state.soundSources) {
        soundSource.volume = volume === false ? 1 : volume;
      }
      state.globalVolume = volume;
    },
  },
});

function checkMediaSourceSupport(mime: string) {
  let isSupported = true;

  if (!('MediaSource' in window)) {
    console.log('There is no MediaSource property in window object.');
    isSupported = false;
  }

  if (!MediaSource.isTypeSupported(mime)) {
    console.log(
      'Can not play the media. Media of MIME type ' +
        mime +
        ' is not supported.'
    );
    isSupported = false;
  }

  return isSupported;
}

function fetchAB(url: string, callbackfunc: (buffer: any) => void) {
  console.log('loading file: ' + url);
  const xhr = new XMLHttpRequest();
  xhr.open('get', url);
  xhr.responseType = 'arraybuffer';
  xhr.onload = function () {
    callbackfunc(xhr.response);
  };
  xhr.send();
}
