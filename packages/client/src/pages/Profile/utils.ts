import type { Fields } from '.';
import type { User } from '../../store/user/type';

const fieldsName: FieldsName = {
  login: 'Login',
  display_name: 'Nickname',
  first_name: 'First name',
  second_name: 'Second name',
  email: 'E-mail',
  phone: 'Phone',
};

export const prepareAllProfileFields = (data: User | null): Fields[] => {
  if (data) {
    const keyAnrValue = Object.entries(data).filter(
      ([key]) => key !== 'avatar' && key !== 'id'
    ) as ProfileData[];

    return keyAnrValue.sort().map(([key, value]) => {
      const defaultParams: Fields = {
        key,
        label: fieldsName[key],
        value: value || '',
        required: true,
      };

      switch (key) {
        case 'email':
          return { ...defaultParams, type: 'email' };
        case 'phone':
          return { ...defaultParams, type: 'tel' };
        default:
          return defaultParams;
      }
    });
  } else {
    return [];
  }
};

export const preparePasswordProfileFields = (): Fields[] => {
  const defaultParams = {
    type: 'password',
    required: true,
    value: '',
  };

  return [
    {
      ...defaultParams,
      key: 'oldPassword',
      label: 'Old password',
    },
    {
      ...defaultParams,
      key: 'newPassword',
      label: 'New password',
    },
    {
      ...defaultParams,
      key: 'repeatPassword',
      label: 'Repeat new password',
    },
  ];
};

type FieldsName = Record<keyof Omit<User, 'avatar' | 'id'>, string>;
type ProfileData =
  | [keyof Omit<User, 'avatar' | 'display_name' | 'id'>, string]
  | [keyof Pick<User, 'display_name'>, string | null];
