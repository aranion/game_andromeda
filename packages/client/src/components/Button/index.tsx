import classnames from 'classnames';

import './Button.css';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
  const { onClick, className, children } = props;
  const classNames = classnames('button', className);
  return (
    <button {...props} onClick={onClick} className={classNames}>
      {children}
    </button>
  );
}
