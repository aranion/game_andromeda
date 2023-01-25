import { ErrorSample } from 'src/components';
import { LANGUAGE } from 'src/constants/vars';
import { text } from './constants';

export default function ServerError() {
  return (
    <ErrorSample
      code='500'
      message={text[LANGUAGE].message}
      typeButton='home'
    />
  );
}
