import type { FC } from 'react';
import classnames from 'classnames';
import './styles.css';

type Props = React.HTMLAttributes<HTMLElement>;

export const Card: FC<Props> = props => {
  const { className, children, ...otherProps } = props;
  const classNames = classnames('card', className);

  return (
    <div className={classNames} {...otherProps}>
      {children}
    </div>
  );
};
