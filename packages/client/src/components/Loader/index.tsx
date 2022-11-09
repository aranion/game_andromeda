import classNames from 'classnames';
import cls from './styles.module.css';

export function Loader() {
  const clsOne = classNames(cls.loader__inner, cls.loader__inner_one);
  const clsTwo = classNames(cls.loader__inner, cls.loader__inner_two);
  const clsThree = classNames(cls.loader__inner, cls.loader__inner_three);

  return (
    <div className={cls.loader}>
      <div className={clsOne}></div>
      <div className={clsTwo}></div>
      <div className={clsThree}></div>
    </div>
  );
}
