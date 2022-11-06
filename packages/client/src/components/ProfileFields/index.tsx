import cls from './style.module.css';
import classNames from 'classnames';
import { Loader, Button } from '../';
import type { FormEvent } from 'react';
import type { Fields } from '../../pages/Profile';

export function ProfileFields(props: Props) {
  const { isEdit, isLoading, fields } = props;

  const clsFieldTitle = classNames(
    cls['profileFields__field_bg'],
    cls['profileFields__field_title']
  );

  const clsFieldValue = classNames(
    cls['profileFields__field_bg'],
    cls['profileFields__field_value'],
    { [cls.profileFields__field_edit]: isEdit }
  );

  if (isLoading) {
    return <Loader />;
  }

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <form className={cls.profileFields} onSubmit={handleSubmitForm}>
      {fields.map(field => {
        const { label, key, value, ...other } = field;

        return (
          <div key={key} className={cls.profileFields__field}>
            <label className={clsFieldTitle} htmlFor={key}>
              {label}
            </label>
            <input
              name={key}
              readOnly={!isEdit}
              className={clsFieldValue}
              defaultValue={value || ''}
              {...other}
            />
          </div>
        );
      })}
      {isEdit && <Button type='submit'>Save</Button>}
    </form>
  );
}

type Props = {
  isLoading: boolean;
  isEdit: boolean;
  fields: Fields[];
};
