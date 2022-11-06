import { ErrorSample } from '../../components';
import { LANGUAGE } from '../../constants/vars';
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
