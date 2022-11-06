import { FC } from 'react';
import classnames from 'classnames';
import './styles.css';

type CardProps = React.HTMLAttributes<HTMLElement>;

export const Card: FC<CardProps> = props => {
  const { className, children, id } = props;
  const classNames = classnames('card', className);
  return (
    <div className={classNames} id={id}>
      {children}
    </div>
  );
};
