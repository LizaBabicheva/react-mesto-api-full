import React from "react";
import loginConfirm from "../images/login-confirm.svg";
import loginReject from "../images/login-reject.svg";

function InfoTooltip({ isOpen, onClose, isRegistered }) {
  return (
    <div className={`popup popup_type_login-status ${isOpen && 'popup_opened'}`}>
      <div className="popup__container popup__container_type_tooltip">
        <img className="popup__tooltip-icon" src={isRegistered ? loginConfirm : loginReject} alt={isRegistered ? `Успешная регистрация` : `Ошибка при регистрации`}></img>
        <h3 className="popup__tooltip-heading">
          {isRegistered ? 'Вы успешно зарегистрировались!' : `Что-то пошло не так! Попробуйте ещё раз.`}
        </h3>
        <button className="popup__close-button" type="button" aria-label="Закрыть"
          onClick={onClose}
        >
        </button>
      </div>
    </div>
  )
}

export default InfoTooltip;