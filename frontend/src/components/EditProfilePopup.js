import { useContext, useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {

  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (isOpen) {
      setName(currentUser.name);
      setDescription(currentUser.about)
    }
  }, [currentUser, isOpen]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      buttonTitle="Сохранить"
      onSubmit={handleSubmit}>

      <label className="popup__input-label">
        <input className="popup__input popup__input_type_profilename" type="text" placeholder="Имя" id="input-profile-name" name="profile-name" minLength="2" maxLength="40" required
          value={name} onChange={handleNameChange} />
        <span className="popup__error"></span>
      </label>
      <label className="popup__input-label">
        <input className="popup__input popup__input_type_profileabout" type="text" placeholder="О себе" id="input-profile-about" name="profile-about" minLength="2" maxLength="200" required
          value={description} onChange={handleDescriptionChange} />
        <span className="popup__error"></span>
      </label>
    </PopupWithForm>
  )
}

export default EditProfilePopup;