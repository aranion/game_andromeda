import { ErrorSample } from '../../components';

export default function NotFound() {
  return (
    <ErrorSample
      code='404'
      message='К сожалению, запрашиваемая страница не найдена'
      typeButton='back'
    />
  );
}
