import React, { useContext, useEffect } from 'react';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import ProfileForm from '../ProfileForm/ProfileForm';
import useFormWithValidation from '../../hooks/useFormWithValidation';

function Profile({
  onEditProfile,
  onUpdateUser,
  isBeingEdited,
  profileErrorMessage,
  resetFormErrorMessage,
  onSignOut
}) {
  const currentUser = useContext(CurrentUserContext);

  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm,
  } = useFormWithValidation({});

  useEffect(() => {
    resetForm({ name: currentUser.name, email: currentUser.email });
  }, [currentUser]);

  useEffect(() => {
    resetFormErrorMessage();
  }, [values]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser(values);
  }
  
  const INPUTS_DATA = [
    {
      key: 1,
      type: 'text',
      id: 'profile-name',
      label: 'Имя',
      placeholder: 'Имя',
      name: 'name',
      required: true,
      pattern: '[a-zA-Z -]{2,30}',
    },
    {
      key: 2,
      type: 'email',
      id: 'profile-email',
      label: 'E-mail',
      placeholder: 'E-mail',
      name: 'email',
      required: true,
    },
  ]

  return (
    <div className="profile">
      <ProfileForm
        name="profile-form"
        inputsData={INPUTS_DATA}
        submitGroupModifier="submit-group_place_profile"
        errorMessage={profileErrorMessage}
        submitButtonTextContent="Сохранить"
        isBeingEdited={isBeingEdited}
        onEditProfile={onEditProfile}
        onChange={handleChange}
        onSubmit={handleSubmit}
        values={values}
        errors={errors}
        isValid={isValid}
        onSignOut={onSignOut}
      />
    </div>
  )
}

export default Profile;
