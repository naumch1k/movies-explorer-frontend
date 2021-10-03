import React, { useContext, useEffect, useState } from 'react';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import ProfileForm from '../ProfileForm/ProfileForm';

function Profile({ onSignOut }) {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [isBeingEdited, setIsBeingEdited] = useState(false);

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  function handleEditProfile() {
    setIsBeingEdited(!isBeingEdited);
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const hanldeEmailChange = (e) => {
    setEmail(e.target.value);
  }
  
  const INPUTS_DATA = [
    {
      key: 1,
      type: 'text',
      id: 'profile-name',
      label: 'Имя',
      placeholder: 'Имя',
      name: 'name',
      value: name,
      onChange: handleNameChange, 
      errorId: "profile-name-error",
      minLength: 2,
      maxLength: 30,
      required: true,
    },
    {
      key: 2,
      type: 'email',
      id: 'profile-email',
      label: 'E-mail',
      placeholder: 'E-mail',
      name: 'email',
      value: email,
      onChange: hanldeEmailChange, 
      errorId: "profile-email-error",
      minLength: 8,
      required: true,
    },
  ]

  return (
    <div className="profile">
      <ProfileForm
        inputsData={INPUTS_DATA}
        buttonText="Сохранить"
        isBeingEdited={isBeingEdited}
        onEditProfile={handleEditProfile}
        onSignOut={onSignOut}
      />
    </div>
  )
}

export default Profile;
