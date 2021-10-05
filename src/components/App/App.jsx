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
import Preloader from '../Preloader/Preloader';

import HeaderLayout from '../../layouts/HeaderLayout';
import HeaderFooterLayout from '../../layouts/HeaderFooterLayout';
import ProtectedRoute from '../ProtectedRoute';

import mainApi from '../../utils/MainApi';
import { registrationErrorMessages, loginErrorMessages, profileErrorMessages, DEFAULT_ERROR_MESSAGE } from '../../utils/constants';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const [authErrorMessage, setAuthErrorMessage] = useState('');
  const [profileErrorMessage, setProfileErrorMessage] = useState('');
  const [profileIsBeingEdited, setProfileIsBeingEdited] = useState(false);

  const [isSideMenuPopupOpen, setSideMenuPopupOpen] = useState(false);
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getUserInfo()
        .then((res) => {
          setCurrentUser(res.data);
        })
        .catch((err) => console.log('Couldnt get user info from the server', err));
    }
  }, [loggedIn]);

  const handleTokenCheck = useCallback(() => {
    mainApi
      .getUserInfo()
      .then(() => {
        setLoggedIn(true);
        setIsLoading(false);
      })
      .catch((err) => {
        setLoggedIn(false);
        setIsLoading(false);
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
        switch (err) {
          case 400:
            setAuthErrorMessage(registrationErrorMessages.BAD_REQUEST);
            break;
          case 409:
            setAuthErrorMessage(registrationErrorMessages.CONFLICT);
            break;
          default:
            setAuthErrorMessage(DEFAULT_ERROR_MESSAGE);
        }
      })
  }

  const handleLogin = (data) => {
    mainApi
      .authorize(data)
      .then(() => {
        setLoggedIn(true);
        history.push('/movies');
      })
      .catch((err) => {
        switch (err) {
          case 400:
            setAuthErrorMessage(loginErrorMessages.INVALID_CREDENTIALS);
            break;
          case 401:
            setAuthErrorMessage(loginErrorMessages.INVALID_CREDENTIALS);
            break;
          case 500:
            setAuthErrorMessage(DEFAULT_ERROR_MESSAGE);
            break;
          default:
            setAuthErrorMessage(loginErrorMessages.UNAUTHORIZED);
        }
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

  const handleUpdateUser = (data) => {
    mainApi
      .setUserInfo(data)
      .then(() => {
        setCurrentUser(data);
      })
      .then(() => {
        setProfileIsBeingEdited(false);
      })
      .catch((err) => {
        switch (err) {
          case 409:
            setProfileErrorMessage(profileErrorMessages.CONFLICT);
            break;
          default:
            setProfileErrorMessage(profileErrorMessages.BAD_REQUEST);
        }
      })
  }

  const handleEditProfile = () => {
    setProfileIsBeingEdited(true);
  }

  const resetAllErrorMessages = () => {
    setAuthErrorMessage('');
    setProfileErrorMessage('');
  };

  const handleSideMenuPopupOpen = () => {
    setSideMenuPopupOpen(true);
  }

  const closeAllPopups = () => {
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
          {isLoading
            ?<Preloader />
            :<Switch>
              <Route exact path="/">
                <HeaderFooterLayout
                  component={Main}
                  loggedIn={loggedIn}
                  headerModifier="header_place_landing"
                  onOpenMenu={handleSideMenuPopupOpen}
                />
              </Route>
              <ProtectedRoute path="/movies" loggedIn={loggedIn}>
                <HeaderFooterLayout
                  component={Movies}
                  loggedIn={loggedIn}
                  onOpenMenu={handleSideMenuPopupOpen}
                />
              </ProtectedRoute>
              <ProtectedRoute path="/saved-movies" loggedIn={loggedIn}>
                <HeaderFooterLayout
                  component={SavedMovies}
                  loggedIn={loggedIn}
                  onOpenMenu={handleSideMenuPopupOpen}
                />
              </ProtectedRoute>
              <ProtectedRoute path="/profile" loggedIn={loggedIn}>
                <HeaderLayout
                  component={Profile}
                  loggedIn={loggedIn}
                  onOpenMenu={handleSideMenuPopupOpen}
                  onEditProfile={handleEditProfile}
                  onUpdateUser={handleUpdateUser}
                  isBeingEdited={profileIsBeingEdited}
                  profileErrorMessage={profileErrorMessage}
                  resetProfileErrorMessage={resetAllErrorMessages}
                  onSignOut={handleSignOut}
                />
              </ProtectedRoute>
              <Route path="/signup">
                <Register 
                  onRegistration={handleRegistration}
                  authErrorMessage={authErrorMessage}
                  resetAuthErrorMessage={resetAllErrorMessages}
                />
              </Route>
              <Route path="/signin">
                <Login
                  onLogin={handleLogin}
                  authErrorMessage={authErrorMessage}
                  resetAuthErrorMessage={resetAllErrorMessages}
                />
              </Route>
              <Route path="*">
                <PageNotFound />
              </Route>
            </Switch>
          }
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
