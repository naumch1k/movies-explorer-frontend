function Profile() {
    return (
      <form className="profile">
        <h2 className="profile__heading">Привет, !</h2>
        <fieldset>
          <label className="profile__info" for="name">Имя</label>
          <input
            className="form__item form__item_el_name"
            id="name"
            type="text"
            name="name"
            placeholder="Имя"
            minLength="2" maxLength="30"
            required
          />
          <label className="profile__info" for="email">E-mail</label>
          <input
            className="form__item form__item_el_email"
            id="email"
            type="email"
            name="email"
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
