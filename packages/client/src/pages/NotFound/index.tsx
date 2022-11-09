import { ErrorSample } from 'src/components';
import { LANGUAGE } from 'src/constants/vars';
import { text } from './constants';

export default function NotFound() {
  return (
    <ErrorSample
      code='404'
      message={text[LANGUAGE].message}
      typeButton='back'
    />
  );
}
