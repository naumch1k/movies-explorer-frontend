import React, { useState, useEffect, useCallback } from 'react';
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';

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
import moviesApi from '../../utils/MoviesApi';
import filterMovies from '../../utils/filterMovies';

import { registrationErrorMessages, loginErrorMessages, profileErrorMessages, DEFAULT_ERROR_MESSAGE } from '../../utils/constants';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMovies, setIsLoadingMovies] = useState(false);

  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(true);

  const [formErrorMessage, setFormErrorMessage] = useState('');
  const [profileIsBeingEdited, setProfileIsBeingEdited] = useState(false);

  const [moviesData, setMoviesData] = useState([]);
  const [noMoviesFound, setNoMoviesFound] = useState(false);

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

      setIsLoadingMovies(true);

      moviesApi
        .getMovies()
        .then((res) => {
          localStorage.setItem('movies', JSON.stringify(res.data));
        })
        .finally(() => {
          setIsLoadingMovies(false);
        })
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
            setFormErrorMessage(registrationErrorMessages.BAD_REQUEST);
            break;
          case 409:
            setFormErrorMessage(registrationErrorMessages.CONFLICT);
            break;
          default:
            setFormErrorMessage(DEFAULT_ERROR_MESSAGE);
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
            setFormErrorMessage(loginErrorMessages.INVALID_CREDENTIALS);
            break;
          case 401:
            setFormErrorMessage(loginErrorMessages.INVALID_CREDENTIALS);
            break;
          case 500:
            setFormErrorMessage(DEFAULT_ERROR_MESSAGE);
            break;
          default:
            setFormErrorMessage(loginErrorMessages.UNAUTHORIZED);
        }
      })
  }

  const handleSignOut = () => {
    mainApi
      .signOut()
      .then(() => {
        setLoggedIn(false);
        localStorage.clear();
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
            setFormErrorMessage(profileErrorMessages.CONFLICT);
            break;
          default:
            setFormErrorMessage(profileErrorMessages.BAD_REQUEST);
        }
      })
  }

  const localMoviesData = JSON.parse(localStorage.getItem('movies'));

  const handleSearchFormSubmit = (searchQuery ) => {
    let filteredMovies = [];
    filteredMovies = filterMovies(searchQuery, localMoviesData);

    if (filteredMovies.length === 0) {
      setNoMoviesFound(true);
    } else {
      setNoMoviesFound(false);
    }

    setMoviesData(filteredMovies);
  }

  const handleEditProfile = () => {
    setProfileIsBeingEdited(true);
  }

  const resetAllFormErrorMessages = () => {
    setFormErrorMessage('');
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
                  isLoadingData={isLoadingMovies}
                  noMoviesFound={noMoviesFound}
                  handleSearchFormSubmit={handleSearchFormSubmit}
                  moviesData={moviesData}

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
                  profileErrorMessage={formErrorMessage}
                  resetFormErrorMessage={resetAllFormErrorMessages}
                  onSignOut={handleSignOut}
                />
              </ProtectedRoute>
              <Route path="/signup">
                {loggedIn
                  ? <Redirect to='/movies' />
                  : <Register 
                      onRegistration={handleRegistration}
                      authErrorMessage={formErrorMessage}
                      resetFormErrorMessage={resetAllFormErrorMessages}
                    />
                }
              </Route>
              <Route path="/signin">
                {loggedIn
                  ? <Redirect to='/movies' />
                  : <Login
                      onLogin={handleLogin}
                      authErrorMessage={formErrorMessage}
                      resetFormErrorMessage={resetAllFormErrorMessages}
                    />
                }
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
