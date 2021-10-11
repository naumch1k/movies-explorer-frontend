import React, { useState, useEffect, useContext } from 'react';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import ProfileForm from '../ProfileForm/ProfileForm';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import { patterns, customErrorMessages } from '../../utils/constants';

function Profile({
  submitButtonText,
  onEditProfile,
  onUpdateUser,
  isBeingEdited,
  profileErrorMessage,
  resetFormErrorMessage,
  onSignOut,
}) {
  const [infoHasBeenChanged, setInfoHasBeenChanged] = useState(false);

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
    if (currentUser.name === values.name && currentUser.email === values.email) {
      setInfoHasBeenChanged(false);
    } else {
      setInfoHasBeenChanged(true);
    }
  }, [currentUser, values]);

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
      pattern: patterns.NAME,
      customErrorMessage: customErrorMessages.NAME,
    },
    {
      key: 2,
      type: 'email',
      id: 'profile-email',
      label: 'E-mail',
      placeholder: 'E-mail',
      name: 'email',
      required: true,
      pattern: patterns.EMAIL,
      customErrorMessage: customErrorMessages.EMAIL,
    },
  ]

  return (
    <div className="profile">
      <ProfileForm
        name="profile-form"
        inputsData={INPUTS_DATA}
        submitGroupModifier="submit-group_place_profile"
        errorMessage={profileErrorMessage}
        submitButtonText={submitButtonText}
        isBeingEdited={isBeingEdited}
        infoHasBeenChanged={infoHasBeenChanged}
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
