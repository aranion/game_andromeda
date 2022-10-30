import { ErrorSample } from '../../components';

export default function ServerError() {
  return (
    <ErrorSample
      code='500'
      message='Внутренняя ошибка сервера. Скоро все поправим!'
      typeButton='home'
    />
  );
}
