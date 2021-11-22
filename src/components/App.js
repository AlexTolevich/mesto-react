import React         from 'react';
import Header        from './Header.js';
import Main          from './Main.js';
import Footer        from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup    from './ImagePopup.js';


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setSelectedCard(null)
  }

  return (
    <div className="root">
      <Header/>

      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />

      <Footer/>

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />

      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        buttonTitle="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
        <input
          aria-label="Ваше имя"
          type="text"
          name="popup_name"
          id="popup-name"
          className="popup__input popup__input_is_name"
          required
          placeholder="Введите Ваше имя"
          value=""
          minLength="2"
          maxLength="40"
        />
        <span id="popup-name-error" className="popup__error"/>
        <input
          aria-label="Род деятельности"
          type="text"
          name="popup_job"
          id="popup-job"
          className="popup__input popup__input_is_job"
          required
          placeholder="Введите Ваш род деятельности"
          value=""
          minLength="2"
          maxLength="200"
        />
        <span id="popup-job-error" className="popup__error"/>
      </PopupWithForm>

      <PopupWithForm
        name="add"
        title="Новое место"
        buttonTitle="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          aria-label="Название фото"
          type="text"
          name="name"
          id="place-name"
          className="popup__input popup__input_is_place-name"
          required
          placeholder="Название"
          value=""
          minLength="2"
          maxLength="30"
        />
        <span id="place-name-error" className="popup__error"/>
        <input
          aria-label="Ссылка на картинку"
          type="url"
          name="link"
          id="place-img-link"
          className="popup__input popup__input_is_img-link"
          required
          placeholder="Ссылка на картинку"
          value=""
        />
        <span id="place-img-link-error" className="popup__error"/>
      </PopupWithForm>

      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        buttonTitle="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          aria-label="Ссылка на аватар"
          type="url"
          name="avatar"
          id="avatar-img-link"
          className="popup__input popup__input_type_avatar-link"
          required
          placeholder="Ссылка на аватар"
          value=""
        />
        <span id="avatar-img-link-error" className="popup__error"/>
      </PopupWithForm>

      <PopupWithForm
        name="confirmation"
        title="Вы уверены?"
        isOpen={false}
        onClose={closeAllPopups}
        buttonTitle="Да"
      />
    </div>
  );
}

export default App;
