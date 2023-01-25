import classNames from 'classnames';
import cls from './styles.module.css';

export function Loader(props: Props) {
  const { position = 'absolute' } = props;

  const clsLoader = classNames(cls.loader, {
    [cls.loader__relative]: position === 'relative',
  });
  const clsOne = classNames(cls.loader__inner, cls.loader__inner_one);
  const clsTwo = classNames(cls.loader__inner, cls.loader__inner_two);
  const clsThree = classNames(cls.loader__inner, cls.loader__inner_three);

  return (
    <div className={clsLoader}>
      <div className={clsOne}></div>
      <div className={clsTwo}></div>
      <div className={clsThree}></div>
    </div>
  );
}

type Props = {
  position?: 'absolute' | 'relative';
};
