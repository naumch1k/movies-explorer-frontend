import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile() {
  const currentUser = useContext(CurrentUserContext);

  return (
    <form className="profile">
      <h2 className="profile__heading">Привет, {currentUser.name}!</h2>
      <fieldset>
        <label className="profile__info" htmlFor="name">Имя</label>
        <input
          className="form__item form__item_el_name"
          id="name"
          type="text"
          name="name"
          /* value={currentUser.name} */ /* commented to avoid warning of missing onChange handler */
          placeholder="Имя"
          minLength="2" maxLength="30"
          required
        />
        <label className="profile__info" htmlFor="email">E-mail</label>
        <input
          className="form__item form__item_el_email"
          id="email"
          type="email"
          name="email"
          /* value={currentUser.email} */
          placeholder="E-mail"
          required
        />
      </fieldset>
        
      <button
        type="submit"
        className=""
      >
        Редактировать
      </button>
      <button
        type="button"
        className=""
      >
        Выйти из аккаунта
      </button>
    </form>
  )
}

export default Profile;
