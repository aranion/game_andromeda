import { FC } from 'react';
import './styles.css';
import classnames from 'classnames';

type Props = React.HTMLAttributes<HTMLElement>;

interface ModalProps extends Props {
  active: boolean;
  setActive: any;
}

export const Modal: FC<ModalProps> = props => {
  const { active, children, title, setActive } = props;

  return (
    <div
      className={classnames('modal', { active: active })}
      onClick={() => setActive(false)}>
      <div
        className={classnames('modal__content', { active: active })}
        onClick={e => e.stopPropagation()}>
        {title ? <div className='modal__title'>{title}</div> : ''}
        {children}
      </div>
    </div>
  );
};
