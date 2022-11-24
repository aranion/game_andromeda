import cls from './styles.module.css';
import { useEffect, useState } from 'react';
import { Loader } from 'src/components';
import { BASE_URL } from 'src/constants/vars';

export function Avatar(props: Props) {
  const { path, isEditAvatar = false } = props;

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

      fetch(`${BASE_URL}/resources${path}`, {
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
    } else {
      setAvatar(null);
    }
  }, [path]);

  return (
    <div className={cls.avatar}>
      {isLoading && <Loader />}
      {isEditAvatar && (
        <button className={cls.avatar__edit} onClick={handleEditAvatar}>
          Изменить аватар
        </button>
      )}
      {avatar && <img className={cls.avatar__img} src={avatar} alt='avatar' />}
    </div>
  );
}

type Props = {
  path?: string | null;
  isEditAvatar?: boolean;
};
