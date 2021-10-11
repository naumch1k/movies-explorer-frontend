import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = (props) => (
  <Route path={props.path}>
    {props.loggedIn 
      ? props.children 
      : <Redirect to='/' />}
  </Route>
);
export default ProtectedRoute;
