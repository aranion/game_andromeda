import cls from './styles.module.css';
import { useEffect, useState } from 'react';
import { Loader } from 'src/components';
import { useUpdateProfile } from 'src/hooks/useUpdateProfile';
import defaultSrcAvatar from 'src/assets/imgs/AvatarDefault.svg';
import { BASE_URL } from '../../../../server/constants/vars';

export function Avatar(props: Props) {
  const { path, isEditAvatar = false } = props;

  const [isLoading, setIsLoading] = useState(false);

  const { updateAvatar, isLoadingAvatar } = useUpdateProfile();

  const [avatar, setAvatar] = useState<string | null>(null);

  const handleEditAvatar = () => {
    const elem = document.createElement('input');
    elem.type = 'file';
    elem.accept = '.jpg, .jpeg, .png';
    elem.onchange = () => {
      if (elem.files) {
        updateAvatar(elem.files[0]);
      }
    };
    elem.click();
    elem.remove();
  };

  useEffect(() => {
    if (path) {
      setIsLoading(true);

      fetch(`${BASE_URL}/resources/${path}`, {
        credentials: 'include',
      })
        .then(res => res.blob())
        .then(img => {
          if (img) {
            setAvatar(URL.createObjectURL(img));
          }
        })
        .catch(err => {
          console.error(err);
          setAvatar(null);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setAvatar(defaultSrcAvatar);
    }
  }, [path]);

  return (
    <div className={cls.avatar}>
      {(isLoading || isLoadingAvatar) && <Loader />}
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
