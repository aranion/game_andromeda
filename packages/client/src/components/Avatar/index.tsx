import cls from './styles.module.css';
import { useEffect, useState } from 'react';
import { Loader } from 'src/components';
import { useUpdateProfile } from 'src/hooks/useUpdateProfile';
import { useLazyFetchAvatarQuery } from 'src/store/resources';
import defaultSrcAvatar from 'src/assets/imgs/AvatarDefault.svg';

export function Avatar(props: Props) {
  const { path, isEditAvatar = false } = props;

  const { updateAvatar, isLoadingAvatar } = useUpdateProfile();

  const [getAvatar, { isFetching }] = useLazyFetchAvatarQuery();

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
      getAvatar(path)
        .then(res => {
          if (res.data) {
            setAvatar(URL.createObjectURL(res.data));
          }
        })
        .catch(err => {
          console.error(err);
          setAvatar(null);
        });
    } else {
      setAvatar(defaultSrcAvatar);
    }
  }, [path]);

  return (
    <div className={cls.avatar}>
      {(isFetching || isLoadingAvatar) && <Loader />}
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
