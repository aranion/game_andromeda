import cls from './style.module.css';
import defaultAvatarSrc from 'src/assets/imgs/mockAvatar.jpg';
import { useEffect, useState } from 'react';
import { Loader } from '../';

export function Avatar(props: Props) {
  const { path = defaultAvatarSrc, isEditAvatar = false } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [avatar, setAvatar] = useState<string | null>(null);

  const handleEditAvatar = () => {
    const elem = document.createElement('input');
    elem.type = 'file';
    elem.click();
    elem.remove();
  };

  useEffect(() => {
    if (path) {
      setIsLoading(true);

      fetch(`https://ya-praktikum.tech/api/v2/resources${path}`, {
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      })
        .then(res => {
          if (res.ok) {
            return res.blob();
          } else {
            throw new Error('Error');
          }
        })
        .then(res => {
          setAvatar(URL.createObjectURL(res));
        })
        .catch(err => {
          console.log(err);
          setAvatar(null);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [path]);

  return (
    <div className={cls.avatar}>
      {isLoading && <Loader />}
      {isEditAvatar && (
        <button className='avatar__edit' onClick={handleEditAvatar}>
          Изменить аватар
        </button>
      )}
      {avatar && <img className={cls.avatar__img} src={defaultAvatarSrc} alt='avatar'/>}
    </div>
  );
}

type Props = {
  path?: string;
  isEditAvatar?: boolean;
};
