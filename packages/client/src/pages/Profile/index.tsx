import cls from './style.module.css';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { Avatar, Button, ProfileFields, TitlePage } from '../../components';
import { useLazyFetchUserDataQuery } from '../../store/user/api';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { userSelectors } from '../../store/user';
import { RouterList, RouterParamsProfile } from '../../router/routerList';
import { useAuth } from '../../hooks/useAuth';
import { prepareAllProfileFields, preparePasswordProfileFields } from './utils';
import type { User } from '../../store/user/type';
import type { InputHTMLAttributes } from 'react';

export default function Profile() {
  const [profileData, setProfileData] = useState<User | null>(null);
  const [fields, setFields] = useState<Fields[]>([]);
  const { userId }: Params = useParams();
  const { pathname } = useLocation();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const { userData } = useTypeSelector(userSelectors.allUser);

  const [fetchUserData, { isLoading, isError }] = useLazyFetchUserDataQuery();

  const nickname = profileData?.display_name || 'Anonymous';
  const isCorrectUserId = userId && !isNaN(+userId);
  const isEditPassword = pathname === RouterList.PROFILE_EDIT_PASSWORD;
  const isEditProfile = pathname === RouterList.PROFILE_EDIT || isEditPassword;
  const isNotMyProfile = userId && !!userData.id && userData.id !== +userId;

  useEffect(() => {
    if (isEditProfile) {
      if (isEditPassword) {
        const fieldsPassword = preparePasswordProfileFields();

        setFields(fieldsPassword);
      } else {
        const fields = prepareAllProfileFields(userData);

        setFields(fields);
        setProfileData(userData);
      }
    } else {
      if (isCorrectUserId) {
        setFields([]);

        fetchUserData(userId)
          .then(res => {
            if ('data' in res && res.data) {
              const fields = prepareAllProfileFields(res.data);

              setProfileData(res.data);
              setFields(fields);
            } else {
              console.error(res.error);
            }
          })
          .catch(console.log);
      }
    }
  }, [pathname, userId]);

  if (!isEditProfile && !isCorrectUserId) {
    return <TitlePage title='ID пользователя указан не верно' />;
  }

  if (isError) {
    return (
      <TitlePage title='Произошла ошибка при получении данных с сервера' />
    );
  }

  const handleEditProfile = () => {
    navigate(RouterList.PROFILE_EDIT);
  };

  const handleEditPassword = () => {
    navigate(RouterList.PROFILE_EDIT_PASSWORD);
  };

  return (
    <>
      <TitlePage title='Profile' />

      <div className={cls.profile}>
        <div className={cls.profile__avatar}>
          <Avatar />
        </div>

        <span className={cls.profile__nickname}>{nickname}</span>

        <ProfileFields
          isEdit={isEditProfile}
          isLoading={isLoading}
          fields={fields}
        />

        {(isEditProfile || !isNotMyProfile) && (
          <div className={cls.profile__buttons}>
            <Button
              onClick={handleEditProfile}
              className={cls.profile__buttons_width}>
              Edit profile
            </Button>
            <Button
              onClick={handleEditPassword}
              className={cls.profile__buttons_width}>
              Edit password
            </Button>
            <Button
              typeButton='danger'
              onClick={logout}
              className={cls.profile__buttons_width}>
              Exit game
            </Button>
          </div>
        )}

        {!isEditProfile && isNotMyProfile && (
          <Link to={`${RouterList.PROFILE}/${userData.id}`}>
            Go to my profile
          </Link>
        )}
      </div>
    </>
  );
}

type Params = Readonly<{ [key in keyof typeof RouterParamsProfile]?: string }>;
type FieldsPassword = 'oldPassword' | 'newPassword' | 'repeatPassword';
export type Fields = InputHTMLAttributes<HTMLInputElement> & {
  key: keyof Omit<User, 'avatar' | 'id'> | FieldsPassword;
  label: string;
};
