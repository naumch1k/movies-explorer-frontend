import React, { useState } from 'react';
import './App.css'
import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import PageNotFound from '../PageNotFound/PageNotFound';

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
        <div className="app">
          <Header
            loggedIn={loggedIn}
          />
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/movies">
              <Movies />
            </Route>
            <Route path="/saved-movies">
              <SavedMovies />
            </Route>
            <Route path="/profile">
              <Profile />
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
          <Footer />
        </div>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
