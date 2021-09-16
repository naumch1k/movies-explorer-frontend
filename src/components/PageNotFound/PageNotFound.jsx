import { useHistory } from 'react-router-dom'; 

import './PageNotFound.css';

function PageNotFound() {
  const history = useHistory();

  const handleGoBackBtnClick = () => {
    history.goBack();
  };

  return (
    <main className="not-found">
      <div className="not-found__container">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__subtitle">Страница не найдена</p>
      </div>
      <button 
        className="not-found__button"
        onClick={handleGoBackBtnClick}
      >
        Назад
      </button>
    </main>
  )
}

export default PageNotFound;
