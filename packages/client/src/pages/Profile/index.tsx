import cls from './styles.module.css';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { userSelectors } from '../../../../server/store/user';
import {
  Avatar,
  Button,
  ProfileFields,
  TitlePage,
  ButtonBack,
} from 'src/components';
import { useTypeSelector } from 'src/hooks/useTypeSelector';
import { RouterList, RouterParamsProfile } from 'src/router/routerList';
import { useAuth } from 'src/hooks/useAuth';
import { prepareAllProfileFields, preparePasswordProfileFields } from './utils';
import { BASE_URL } from '../../../../server/constants/vars';
import type { InputHTMLAttributes } from 'react';
import type { User } from '../../../../server/store/user/type';

export default function Profile() {
  const [profileData, setProfileData] = useState<User | null>(null);
  const [fields, setFields] = useState<Fields[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  const { userId }: Params = useParams();
  const { pathname } = useLocation();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const { userData } = useTypeSelector(userSelectors.all);
  const { id } = userData;

  const nickname = profileData?.display_name || profileData?.login || '';
  const isCorrectUserId = userId && !isNaN(+userId);
  const isEditPassword = pathname === RouterList.PROFILE_EDIT_PASSWORD;
  const isEditProfile = pathname === RouterList.PROFILE_EDIT || isEditPassword;
  const isNotMyProfile = !!(userId && !!id && id !== +userId);

  useEffect(() => {
    if (isEditPassword) {
      const fieldsPassword = preparePasswordProfileFields();

      setFields(fieldsPassword);
    } else {
      const fields = prepareAllProfileFields(userData);

      setFields(fields);
      setProfileData(userData);
    }
  }, [isEditPassword, userData]);

  useEffect(() => {
    if (!isEditProfile && isCorrectUserId) {
      setIsFetching(true);
      setFields([]);
      setProfileData(null);

      fetch(`${BASE_URL}/user/${userId}`, {
        credentials: 'include',
      })
        .then<User>(res => res.json())
        .then(res => {
          if (res) {
            const fields = prepareAllProfileFields(res);

            setProfileData(res);
            setFields(fields);
          } else {
            throw new Error(res);
          }
        })
        .catch(console.error)
        .finally(() => setIsFetching(false));
    }
  }, [userId]);

  if (!isEditProfile && !isCorrectUserId) {
    return <TitlePage>ID пользователя указан не верно</TitlePage>;
  }

  const handleEditProfile = () => {
    navigate(RouterList.PROFILE_EDIT, { replace: true });
  };

  const handleEditPassword = () => {
    navigate(RouterList.PROFILE_EDIT_PASSWORD, { replace: true });
  };

  return (
    <div className={cls.wrapper}>
      <TitlePage>Profile</TitlePage>

      <div className={cls.profile}>
        <div className={cls.profile__avatar}>
          <Avatar isEditAvatar={!isNotMyProfile} path={profileData?.avatar} />
        </div>

        <span className={cls.profile__nickname}>{nickname}</span>

        <ProfileFields
          isEdit={isEditProfile}
          isEditPassword={isEditPassword}
          isLoading={isFetching}
          fields={fields}
          userId={id}
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
              Log out
            </Button>
          </div>
        )}

        {!isEditProfile && isNotMyProfile && (
          <Link to={`${RouterList.PROFILE}/${id}`}>Go to my profile</Link>
        )}
      </div>
      <ButtonBack />
    </div>
  );
}

type Params = Readonly<{ [key in keyof typeof RouterParamsProfile]?: string }>;
type FieldsPassword = 'oldPassword' | 'newPassword' | 'repeatPassword';
export type Fields = InputHTMLAttributes<HTMLInputElement> & {
  key: keyof Omit<User, 'avatar' | 'id'> | FieldsPassword;
  label: string;
};
