import classnames from 'classnames';

import './styles.css';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  typeButton?: 'danger';
  sizeButton?: null | 'normal' | 'big';
};

export function Button(props: ButtonProps) {
  const { className, children, typeButton, sizeButton, ...otherProps } = props;
  const classNames = classnames(
    'button',
    className,
    {
      ['button__danger']: typeButton === 'danger',
    },
    {
      ['button_size_big']: sizeButton === 'big',
    }
  );

  return (
    <button {...otherProps} className={classNames}>
      {children}
    </button>
  );
}
