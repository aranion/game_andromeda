import { RootState } from '../../../server/store/getInitialState';

export {};

declare global {
  interface Window {
    __PRELOADED_STATE__?: RootState;
  }
}
