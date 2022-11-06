import { useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {

  const [placeName, setPlaceName] = useState('');
  const [placeLink, setPlaceLink] = useState('');

  useEffect(() => {
    if (isOpen) {
      setPlaceName('');
      setPlaceLink('')
    }
  }, [isOpen])

  function handlePlaceNameChange(e) {
    setPlaceName(e.target.value);
  }

  function handlePlaceLinkChange(e) {
    setPlaceLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: placeName,
      link: placeLink
    });
  }

  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      buttonTitle="Создать"
      onSubmit={handleSubmit}
    >

      <label className="popup__input-label">
        <input className="popup__input popup__input_type_placename" type="text" placeholder="Название" name="element-name" minLength="2" maxLength="30" required
          value={placeName} onChange={handlePlaceNameChange} />
        <span className="popup__error"></span>
      </label>
      <label className="popup__input-label">
        <input className="popup__input popup__input_type_placephoto" type="url" placeholder="Ссылка на картинку" name="element-image" required
          value={placeLink} onChange={handlePlaceLinkChange} />
        <span className="popup__error"></span>
      </label>
    </PopupWithForm>
  )
}

export default AddPlacePopup;