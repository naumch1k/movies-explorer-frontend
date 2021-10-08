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

import {
  registrationErrorMessages,
  loginErrorMessages,
  profileErrorMessages,
  DEFAULT_ERROR_MESSAGE,
  MOVIES_URL
} from '../../utils/constants';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [moviesData, setMoviesData] = useState({});
  const [savedMoviesData, setSavedMoviesData] = useState({});

  const [formErrorMessage, setFormErrorMessage] = useState('');
  const [profileIsBeingEdited, setProfileIsBeingEdited] = useState(false);

  const [isSideMenuPopupOpen, setSideMenuPopupOpen] = useState(false);
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = useState(false);

  const [loginSubmitButtonText, setLoginSubmitButtonText] = useState('Войти');
  const [registerSubmitButtonText, setRegisterSubmitButtonText] = useState('Зарегистрироваться');
  const [profileSubmitButtonText, setProfileSubmitButtonText] = useState('Сохранить');

  const history = useHistory();

  useEffect(() => {
    if (loggedIn) {
      const localUserData = localStorage.getItem('currentUser');
      const localMoviesData = localStorage.getItem('movies');
      const localSavedMoviesData = localStorage.getItem('savedMovies');

      if (!localUserData) {
        mainApi
          .getUserInfo()
          .then((res) => {
            localStorage.setItem('currentUser', JSON.stringify(res.data));
            setCurrentUser(res.data);
          })
          .catch((err) => console.log('Couldn\'t get user info from the server', err));
      } else {
        setCurrentUser(JSON.parse(localUserData));
      }
  
      if (!localMoviesData) {
        moviesApi
          .getMovies()
          .then((res) => {
            localStorage.setItem('movies', JSON.stringify(res.data));
            setMoviesData(res.data);
          })
          .catch((err) => console.log('Couldn\'t get movies data from the server', err));
        } else {
          setMoviesData(JSON.parse(localMoviesData));
        }

        if (!localSavedMoviesData) {
          mainApi
            .getSavedMovies()
            .then((res) => {
              localStorage.setItem('savedMovies', JSON.stringify(res.data.data));
              setSavedMoviesData(res.data.data);
            })
            .catch((err) => console.log('Couldn\'t get saved movies data from the server', err));
          } else {
            setSavedMoviesData(JSON.parse(localSavedMoviesData));
          }
    }
  }, [loggedIn]);

  const handleTokenCheck = useCallback(() => {
    mainApi
      .getUserInfo()
      .then(() => {
        setLoggedIn(true);
      })
      .catch((err) => {
        console.log(`Error code: ${err}`);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, [])

  useEffect(() => {
    handleTokenCheck();
  }, [handleTokenCheck])

  const handleRegistration = (data) => {
    setRegisterSubmitButtonText('Выполняется регистрация...');

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
      .finally(() => {
        setRegisterSubmitButtonText('Зарегистрироваться');
      })
  }

  const handleLogin = (data) => {
    setLoginSubmitButtonText('Выполняется вход...');
    
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
      .finally(() => {
        setLoginSubmitButtonText('Войти');
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
        console.log(`Unable to logout. Error code: ${err}`);
      })
  }

  const handleUpdateUser = (data) => {
    setProfileSubmitButtonText('Сохранение...');

    mainApi
      .setUserInfo(data)
      .then((res) => {
        localStorage.setItem('currentUser', JSON.stringify(res.data));
        setCurrentUser(res.data);
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
      .finally(() => {
        setProfileSubmitButtonText('Сохранить');
      })
  }

  const handleCardDelete = (card) => {
    mainApi
      .deleteSavedMovie(card._id)
      .then(() => {
        localStorage.setItem('savedMovies', JSON.stringify(savedMoviesData.filter((item) => item !== card)));
        setSavedMoviesData(savedMoviesData.filter((item) => item !== card));
      })
      .catch((err) => {
        console.log(`Unable to delete movie. Error code: ${err}`);
      })
  }
  
  const handleCardSaveToggle = (card) => {
    if (card.isSaved) {
      const savedMovie = savedMoviesData.find(movie => movie.movieId === card.id);
      handleCardDelete(savedMovie);
    } else {
      mainApi
        .saveMovie({
          country: card.country,
          director: card.director,
          duration: card.duration,
          year: card.year,
          description: card.description,
          image: `${MOVIES_URL}${card.image.url}`,
          trailer: card.trailerLink,
          thumbnail: `${MOVIES_URL}${card.image.formats.thumbnail.url}`,
          nameRU: card.nameRU,
          nameEN: card.nameEN,
          movieId: card.id,
        })
        .then((res) => {
          localStorage.setItem('savedMovies', JSON.stringify([res.data, ...savedMoviesData]));
          setSavedMoviesData([res.data, ...savedMoviesData]);
        })
        .catch((err) => {
          console.log(`Unable to save movie. Error code: ${err}`);
        })
    }
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
                  moviesData={moviesData}
                  savedMoviesData={savedMoviesData}
                  onCardSaveToggle={handleCardSaveToggle}
                />
              </ProtectedRoute>
              <ProtectedRoute path="/saved-movies" loggedIn={loggedIn}>
                <HeaderFooterLayout
                  component={SavedMovies}
                  loggedIn={loggedIn}
                  onOpenMenu={handleSideMenuPopupOpen}
                  moviesData={savedMoviesData}
                  onCardDelete={handleCardDelete}
                />
              </ProtectedRoute>
              <ProtectedRoute path="/profile" loggedIn={loggedIn}>
                <HeaderLayout
                  component={Profile}
                  loggedIn={loggedIn}
                  onOpenMenu={handleSideMenuPopupOpen}
                  submitButtonText={profileSubmitButtonText}
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
                      submitButtonText={registerSubmitButtonText}
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
                      submitButtonText={loginSubmitButtonText}
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
