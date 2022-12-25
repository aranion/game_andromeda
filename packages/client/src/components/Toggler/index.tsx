import classnames from 'classnames';
import cls from './styles.module.css';
import type { InputHTMLAttributes } from 'react';

export function Toggler(props: Props) {
  const { className, toggleCheck, isChecked, ...otherProps } = props;

  const classNames = classnames(cls.toggler, className);

  return (
    <label className={classNames} htmlFor='toggler'>
      <input
        className={cls.toggler__input}
        id='toggler'
        type='checkbox'
        checked={isChecked}
        onChange={toggleCheck}
        readOnly
        {...otherProps}
      />
      <span className={cls.toggler__slider} />
    </label>
  );
}

type Props = {
  isChecked: boolean;
  toggleCheck: () => void;
} & InputHTMLAttributes<HTMLInputElement>;
