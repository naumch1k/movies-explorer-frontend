import React, { useState, useEffect, useCallback } from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import SideMenu from '../SideMenu/SideMenu';

import HeaderLayout from '../../layouts/HeaderLayout';
import HeaderFooterLayout from '../../layouts/HeaderFooterLayout';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  const [currentUser, setCurrentUser] = useState({
    name: 'Виталий',
    email: 'email@email.com'
  });

  const [isSideMenuPopupOpen, setSideMenuPopupOpen] = useState(false);

  const [loggedIn, setLoggedIn] = useState(false);

  function handleSideMenuPopupOpen () {
    setSideMenuPopupOpen(true);
  }

  function closeAllPopups() {
    setSideMenuPopupOpen(false);
  }

  const closeByEsc = useCallback(e => {
    if (e.key === 'Escape') {
      closeAllPopups();
    }
  }, []);

  useEffect(() => {
    if (isSideMenuPopupOpen) {
      document.addEventListener('keydown', closeByEsc)
    }
    return () => document.removeEventListener('keydown', closeByEsc)
  }, [closeByEsc, isSideMenuPopupOpen]);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page__container">
          <Switch>
            <Route exact path="/">
              <HeaderFooterLayout
                component={Main}
                loggedIn={loggedIn}
                headerModifier="header_place_landing"
                onOpenMenu={handleSideMenuPopupOpen}
              />
            </Route>
            <Route path="/movies">
              <HeaderFooterLayout
                component={Movies}
                loggedIn={loggedIn}
                onOpenMenu={handleSideMenuPopupOpen}
              />
            </Route>
            <Route path="/saved-movies">
              <HeaderFooterLayout
                component={SavedMovies}
                loggedIn={loggedIn}
                onOpenMenu={handleSideMenuPopupOpen}
              />
            </Route>
            <Route path="/profile">
              <HeaderLayout
                component={Profile}
                loggedIn={loggedIn}
                onOpenMenu={handleSideMenuPopupOpen}
              />
            </Route>
            <Route path="/signup">
              <Register />
            </Route>
            <Route path="/signin">
              <Login />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
          <SideMenu
            isOpen={isSideMenuPopupOpen}
            onClose={closeAllPopups}
            onMobileLink={closeAllPopups}
          />
        </div>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
