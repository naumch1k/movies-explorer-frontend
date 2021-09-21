import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';

import HeaderLayout from '../../layouts/HeaderLayout';
import HeaderFooterLayout from '../../layouts/HeaderFooterLayout';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  const [currentUser, setCurrentUser] = useState({
    name: 'Виталий',
    email: 'email@email.com'
  });

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page__container">
          <Switch>
            <Route exact path="/">
              <HeaderFooterLayout
                component={Main}
                loggedIn={loggedIn}
              />
            </Route>
            <Route path="/movies">
              <HeaderFooterLayout
                component={Movies}
                loggedIn={loggedIn}
              />
            </Route>
            <Route path="/saved-movies">
              <HeaderFooterLayout
                component={SavedMovies}
                loggedIn={loggedIn}
              />
            </Route>
            <Route path="/profile">
              <HeaderLayout
                component={Profile}
                loggedIn={loggedIn}
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
        </div>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
