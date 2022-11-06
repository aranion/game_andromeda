import cls from './style.module.css';
import mockAvatarSrc from '../../assets/imgs/mockAvatar.jpg';

export function Avatar() {
  return (
    <div className={cls.avatar}>
      <img className={cls.avatar__img} src={mockAvatarSrc} alt='avatar'></img>
    </div>
  );
}
