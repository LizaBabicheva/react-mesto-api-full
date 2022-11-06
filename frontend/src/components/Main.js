import { useContext } from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({ onCardClick, onEditAvatar, onEditProfile, onAddPlace, cards, onCardLike, onCardDelete }) {

  const currentUser = useContext(CurrentUserContext);

  return (
    <main>
      <section className="profile">
        <img className="profile__avatar" src={currentUser.avatar} alt="Аватар" />
        <button className="profile__avatar-button" type="button" aria-label="Изменить аватар"
          onClick={onEditAvatar}></button>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button className="profile__edit-button" type="button" aria-label="Изменить профиль"
            onClick={onEditProfile}></button>
          <p className="profile__about">{currentUser.about}</p>
        </div>
        <button className="profile__add-button" type="button" aria-label="Добавить"
          onClick={onAddPlace}></button>
      </section>
      <section>
        <ul className="elements">
          {cards.map((cardItem) => (
            <Card
              card={cardItem}
              key={cardItem._id}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Main;