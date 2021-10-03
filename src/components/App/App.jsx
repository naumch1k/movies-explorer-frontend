import React, { useState, useEffect, useCallback } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import SideMenu from '../SideMenu/SideMenu';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

import HeaderLayout from '../../layouts/HeaderLayout';
import HeaderFooterLayout from '../../layouts/HeaderFooterLayout';

import mainApi from '../../utils/MainApi';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const [isSideMenuPopupOpen, setSideMenuPopupOpen] = useState(false);
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = useState(false);

  const history = useHistory();

  const handleTokenCheck = useCallback(() => {
    mainApi
      .checkToken()
      .then((res) => {
        setCurrentUser(res);
        setLoggedIn(true);
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      })
  }, [])

  useEffect(() => {
    handleTokenCheck();
  }, [handleTokenCheck])

  const handleRegistration = (data) => {
    mainApi
      .register(data)
      .then(() => {
        handleLogin({
          email: data.email,
          password: data.password
        });
      })
      .catch((err) => {
        console.log(`Unable to register. ${err}`);
      })
  }

  const handleLogin = (data) => {
    mainApi
      .authorize(data)
      .then(() => {
        handleTokenCheck();
      })
      .then(() => {
        history.push('/movies');
      })
      .catch((err) => {
        console.log(`Unable to login. ${err}`);
      })
  }

  const handleSignOut = () => {
    mainApi
      .signOut()
      .then(() => {
        setLoggedIn(false);
        history.push("/");
      })
      .catch((err) => {
        console.log(`Unable to logout. ${err}`);
      })
  }

  function handleSideMenuPopupOpen () {
    setSideMenuPopupOpen(true);
  }

  function closeAllPopups() {
    setSideMenuPopupOpen(false);
    setIsInfoTooltipPopupOpen(false);
  }

  const closeByEsc = useCallback(e => {
    if (e.key === 'Escape') {
      closeAllPopups();
    }
  }, []);

  useEffect(() => {
    if (isSideMenuPopupOpen || isInfoTooltipPopupOpen) {
      document.addEventListener('keydown', closeByEsc)
    }
    return () => document.removeEventListener('keydown', closeByEsc)
  }, [closeByEsc, isSideMenuPopupOpen, isInfoTooltipPopupOpen]);

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
                onSignOut={handleSignOut}
              />
            </Route>
            <Route path="/signup">
              <Register 
                onRegistration={handleRegistration}
              />
            </Route>
            <Route path="/signin">
              <Login
                onLogin={handleLogin}
              />
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
          <InfoTooltip
            isOpen={isInfoTooltipPopupOpen}
            onClose={closeAllPopups}
          />
        </div>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
