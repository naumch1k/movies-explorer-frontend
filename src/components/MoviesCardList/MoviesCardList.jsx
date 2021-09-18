import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

// temp data for dev purposes
const cards  = [
  {
    name: '33 слова о дизайне',
    duration: '1ч 17м',
    thumbnail: "https://via.placeholder.com/360x201",
  },
  {
    name: 'Киноальманах «100 лет дизайна»',
    duration: '1ч 17м',
    thumbnail: "https://via.placeholder.com/360x201",
  },
  {
    name: 'В погоне за Бенкси',
    duration: '1ч 17м',
    thumbnail: "https://via.placeholder.com/360x201",
  },
  {
    name: 'Баския: Взрыв реальности',
    duration: '1ч 17м',
    thumbnail: "https://via.placeholder.com/360x201",
  },
  {
    name: 'Бег это свобода',
    duration: '1ч 17м',
    thumbnail: "https://via.placeholder.com/360x201",
  },
  {
    name: 'Книготорговцы от создателей фильмов Аватар и Парк Юрского периода',
    duration: '1ч 17м',
    thumbnail: "https://via.placeholder.com/360x201",
  },
];

function MoviesCardList() {
    return (
      <section className="movies main__section">
        <ul className="movies__list">
          {cards.map((card) => (
            <MoviesCard
              card={card}
            />
          ))}
        </ul>
        <button
          className="movies__btn"
          type="button"
          aria-label="Показать больше фильмов"
        >
          Ещё
        </button>
      </section>
    )
  }
  
  export default MoviesCardList;
