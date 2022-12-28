import { soundSelectors } from 'src/store/sound';
import { useTypeSelector } from 'src/hooks/useTypeSelector';
import { useActions } from './useActions';
import { AudioStatus } from 'src/store/sound/type';

enum PlayWhenLoaded {
  continuous = 'continuous',
  once = 'once',
}
type AddSoundParams = {
  soundURL: string;
  playWhenLoaded?: keyof typeof PlayWhenLoaded;
};

export const useAudio = () => {
  const { globalGainNode, globalContext, loadedSounds } = useTypeSelector(
    soundSelectors.all
  );

  const { appendAudio, playAudio, stopAudio } = useActions();

  const addSound = (params: AddSoundParams) => {
    const { soundURL, playWhenLoaded } = params;

    if (!checkMediaSourceSupport(soundURL) || !globalGainNode || !globalContext)
      return;

    for (const loadedSound of loadedSounds) {
      if (loadedSound.soundURL === soundURL) {
        console.log('REJECT');
        return;
      }
    }

    appendAudio({
      soundURL,
      audioBuffer: AudioStatus.loading,
      audioSource: AudioStatus.loading,
    });

    fetchAB(`/audio/${soundURL.toString()}`, function (buf) {
      globalContext.decodeAudioData(
        buf,
        function (response) {
          if (playWhenLoaded) {
            const bufferSource = globalContext.createBufferSource();
            bufferSource.connect(globalGainNode);
            bufferSource.buffer = response;
            appendAudio({
              soundURL,
              audioBuffer: response,
              audioSource: bufferSource,
            });

            if (playWhenLoaded === PlayWhenLoaded.continuous) {
              bufferSource.loop = true;
            }

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
            appendAudio({
              soundURL,
              audioBuffer: response,
              audioSource: AudioStatus.loading,
            });
          }
        },
        function () {
          console.error('The request failed.');
        }
      );
    });
  };

  const playSound = (soundURL: string, continuous?: boolean | null) => {
    if (!checkMediaSourceSupport(soundURL)) return;
    playAudio({ soundURL, continuous });
  };

  const stopSound = (soundURL: string) => {
    if (!checkMediaSourceSupport(soundURL)) return;
    stopAudio({ soundURL });
  };

  return { addSound, playSound, stopSound };
};

function checkMediaSourceSupport(soundURL: string) {
  let mime = 'audio/mpeg';
  if (soundURL.includes('.wav')) {
    mime = 'audio/wav';
  } else if (soundURL.includes('.ogg')) {
    mime = 'audio/ogg';
  } else if (soundURL.includes('.flac')) {
    mime = 'audio/flac';
  } else if (soundURL.includes('.weba')) {
    mime = 'audio/webm';
  }

  const audio = document.createElement('audio');

  if (
    !(typeof audio.canPlayType === 'function' && audio.canPlayType(mime) !== '')
  ) {
    console.log(
      'Can not play the media. Media of MIME type ' +
        mime +
        ' is not supported.'
    );
    return false;
  }

  return true;
}

function fetchAB(url: string, callbackfunc: (buffer: ArrayBuffer) => void) {
  console.log('loading file: ' + url);
  const xhr = new XMLHttpRequest();
  xhr.open('get', url);
  xhr.responseType = 'arraybuffer';
  xhr.onload = function () {
    callbackfunc(xhr.response);
  };
  xhr.send();
}
