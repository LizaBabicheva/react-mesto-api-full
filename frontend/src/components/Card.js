import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
  const currentUser = useContext(CurrentUserContext);

  const isOwn = props.card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `element__delete ${isOwn ? 'element__delete_visible' : ''}`
  );

  const isLiked = props.card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (
    `element__like ${isLiked ? 'element__like_active' : ''}`
  );

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="element">
      <img className="element__photo" src={props.card.link} alt={props.card.name}
        onClick={handleClick} />
      <button className={cardDeleteButtonClassName} type="button" aria-label="Удалить"
        onClick={handleDeleteClick}
        ></button>
      <div className="element__description">
        <h2 className="element__name">{props.card.name}</h2>
        <button className={cardLikeButtonClassName} type="button" aria-label="Нравится"
          onClick={handleLikeClick}></button>
        <p className="element__like-counter">{props.card.likes.length}</p>
      </div>
    </li>
  )
}

export default Card;