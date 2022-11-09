import { Button, Star } from '../..';
import type { ButtonProps } from '../../Button';

export function ForumButton(props: ButtonProps) {
  const { onClick, children } = props;
  return (
    <div className='forum__button'>
      <Star size='small' relative={true} />
      <Button className='button_center' onClick={onClick}>
        {children}
      </Button>
      <Star size='small' relative={true} />
    </div>
  );
}
