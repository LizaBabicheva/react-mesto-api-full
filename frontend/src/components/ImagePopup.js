import React from 'react';

function ImagePopup(props) {
  return (
    <div className={`popup popup_type_photo ${props.card.link ? 'popup_opened' : ""}`}>
      <div className="popup__photo-container">
        <figure className="popup__photo-figure">
          <img className="popup__photo-image" src={props.card.link || "#"} alt={props.card.name || ""} />
          <figcaption className="popup__photo-caption">{props.card.name || ""}</figcaption>
        </figure>
        <button className="popup__close-button" type="button" aria-label="Закрыть"
          onClick={props.onClose}></button>
      </div>
    </div>
  )
}

export default ImagePopup;