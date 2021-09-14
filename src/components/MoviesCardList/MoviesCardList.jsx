import MoviesCard from '../MoviesCard/MoviesCard';

// temp data for dev purposes
const cards  = [
  {
    name: '33 слова о дизайне',
    duration: '1h17m',
    thumbnail: "https://via.placeholder.com/360x201",
  },
  {
    name: 'Киноальманах «100 лет дизайна»',
    duration: '1h17m',
    thumbnail: "https://via.placeholder.com/360x201",
  },
  {
    name: 'В погоне за Бенкси',
    duration: '1h17m',
    thumbnail: "https://via.placeholder.com/360x201",
  },
  {
    name: 'Баския: Взрыв реальности',
    duration: '1h17m',
    thumbnail: "https://via.placeholder.com/360x201",
  },
  {
    name: 'Бег это свобода',
    duration: '1h17m',
    thumbnail: "https://via.placeholder.com/360x201",
  },
  {
    name: 'Книготорговцы',
    duration: '1h17m',
    thumbnail: "https://via.placeholder.com/360x201",
  },
];

function MoviesCardList() {
    return (
      <ul className="movies__list">
        {cards.map((card) => (
          <MoviesCard
            card={card}
          />
        ))}
        <button
          className=""
          type="button"
          aria-label="Показать больше фильмов"
        >
          Ещё
        </button>
      </ul>
    )
  }
  
  export default MoviesCardList;
