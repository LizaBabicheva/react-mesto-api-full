import React from "react";
import PopupWithForm from "./PopupWithForm";

function ConfirmDeletePopup({ isOpen, onClose, onConfirmDelete }) {

  function handleSubmit(e) {
    e.preventDefault();
    onConfirmDelete();
  }
  return(
    <PopupWithForm
    name="confirm"
    title="Вы уверены?"
    isOpen={isOpen}
    onClose={onClose}
    buttonTitle="Да"
    onSubmit={handleSubmit}>
    </PopupWithForm>
  )
}

export default ConfirmDeletePopup;