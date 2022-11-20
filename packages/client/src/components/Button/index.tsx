import classnames from 'classnames';

import './styles.css';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  typeButton?: 'danger';
  positionButton?: 'absolute';
};

export function Button(props: ButtonProps) {
  const { className, children, typeButton, positionButton, ...otherProps } =
    props;

  const classNames = classnames('button', className, {
    [`button__type_${typeButton}`]: !!typeButton,
    [`button__position_${positionButton}`]: !!positionButton,
  });

  return (
    <button {...otherProps} className={classNames}>
      {children}
    </button>
  );
}
