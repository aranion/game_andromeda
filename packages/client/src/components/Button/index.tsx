import classnames from 'classnames';

import './styles.css';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  typeButton?: 'danger';
  positionButton?: 'absolute';
  sizeButton?: 'small' | 'normal' | 'big';
};

export function Button(props: ButtonProps) {
  const {
    className,
    children,
    typeButton,
    sizeButton,
    positionButton,
    ...otherProps
  } = props;

  const classNames = classnames('button', className, {
    [`button__type_${typeButton}`]: !!typeButton,
    [`button__position_${positionButton}`]: !!positionButton,
    [`button_size_${sizeButton}`]: !!sizeButton,
  });

  return (
    <button {...otherProps} className={classNames}>
      {children}
    </button>
  );
}
