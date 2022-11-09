import type { FC } from 'react';
import classnames from 'classnames';
import './styles.css';

type Props = React.HTMLAttributes<HTMLElement> & {
  active: boolean;
  setActive: (isActive: boolean) => void;
};

export const Modal: FC<Props> = props => {
  const { active, children, title, setActive } = props;

  const handleActive = () => setActive(false);
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  return (
    <div className={classnames('modal', { active })} onClick={handleActive}>
      <div
        className={classnames('modal__content', { active })}
        onClick={handleClick}>
        {title ? <div className='modal__title'>{title}</div> : null}
        {children}
      </div>
    </div>
  );
};
