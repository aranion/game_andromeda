import classnames from 'classnames';

import './styles.css';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
  const { className, children, ...otherProps } = props;
  const classNames = classnames('button', className);

  return (
    <button {...otherProps} className={classNames}>
      {children}
    </button>
  );
}
