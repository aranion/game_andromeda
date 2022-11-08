import classnames from 'classnames';

import './styles.css';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  typeButton?: 'danger';
};

export function Button(props: ButtonProps) {
  const { className, children, typeButton, ...otherProps } = props;
  const classNames = classnames('button', className, {
    ['button__danger']: typeButton === 'danger',
  });

  return (
    <button {...otherProps} className={classNames}>
      {children}
    </button>
  );
}
