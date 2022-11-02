import cls from './style.module.css';
import starImgSrc from '../../assets/imgs/star.svg';

export function Rating(props: Props) {
  const { showStars } = props;
  const starts = [...Array(showStars > 5 ? 5 : showStars).keys()];

  return (
    <>
      {starts.map(star => (
        <img key={star} className={cls.star} src={starImgSrc} alt='star' />
      ))}
    </>
  );
}

type Props = {
  showStars: number;
};
