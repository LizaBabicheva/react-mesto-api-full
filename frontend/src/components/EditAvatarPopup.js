import { useEffect, useRef } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {

  const avatarRef = useRef();

  useEffect(() => {
    if (isOpen) {
      avatarRef.current.value = ''
    }
  }, [avatarRef, isOpen])

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      buttonTitle="Сохранить"
      onSubmit={handleSubmit}>

      <label className="popup__input-label">
        <input className="popup__input popup__input_type_avatarlink" type="url" placeholder="Ссылка на аватар" name="avatar-image" required
          ref={avatarRef} />
        <span className="popup__error"></span>
      </label>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;