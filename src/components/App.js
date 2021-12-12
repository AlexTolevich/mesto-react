import React                from 'react';
import Header               from './Header.js';
import Main                 from './Main.js';
import Footer               from './Footer.js';
import PopupWithForm        from './PopupWithForm.js';
import ImagePopup           from './ImagePopup.js';
import {api}                from '../utils/api.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';
import EditProfilePopup     from './EditProfilePopup.js';


function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);
    const [currentUser, setCurrentUser] = React.useState({});

    React.useEffect(() => {
        api
            .getUserInfo()
            .then((userInfoRes) => {
                setCurrentUser(userInfoRes)
            })
            .catch((err) => {
                console.log(`Ошибка загрузки данных: ${err}`);
            });
    }, [])

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

    function handleUpdateUser(data) {
        api
            .setUserInfo(data)
            .then((user) => {
                setCurrentUser(user)
                closeAllPopups()
            })
            .catch((err) => {
                console.log(`Ошибка обновления данных профиля: ${err}`);
            })
    }

    function closeAllPopups() {
        setIsAddPlacePopupOpen(false)
        setIsEditAvatarPopupOpen(false)
        setIsEditProfilePopupOpen(false)
        setSelectedCard(null)
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
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

                <EditProfilePopup
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
                    onUpdateUser={handleUpdateUser}
                />

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
        </CurrentUserContext.Provider>
    );
}

export default App;
