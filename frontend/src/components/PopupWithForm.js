import React from 'react';

function PopupWithForm({isOpen, onClose, name, title, buttonTitle, children, onSubmit}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
      <div className={`popup__container popup__container_type_${name}`}>
        <form className="popup__form" name={name} onSubmit={onSubmit}>
          <h3 className="popup__form-heading">{title}</h3>
          <fieldset className="popup__form-fieldset">
            {children}
          </fieldset>
          <button className="popup__save-button" type="submit" aria-label="Сохранить">{buttonTitle}</button>
        </form>
        <button className="popup__close-button" type="button" aria-label="Закрыть"
          onClick={onClose}
          >
        </button>
      </div>
    </div>
  )
}

export default PopupWithForm;