import { useHistory } from 'react-router-dom'; 

import './PageNotFound.css';

function PageNotFound() {
  const history = useHistory();

  const handleGoBackBtnClick = () => {
    history.goBack();
  };

  return (
    <div className="not-found">
      <div className="not-found__container">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__subtitle">Page Not Found</p>
      </div>
      <button 
        className="not-found__button"
        onClick={handleGoBackBtnClick}
      >
        Go Back
      </button>
    </div>
  )
}

export default PageNotFound;
