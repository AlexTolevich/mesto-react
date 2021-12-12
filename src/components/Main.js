import {api}                from '../utils/api.js';
import React                from 'react';
import Card                 from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Main({onEditAvatar, onAddPlace, onEditProfile, onCardClick}) {
    const [cards, setCards] = React.useState([]);
    const currentUser = React.useContext(CurrentUserContext);

    function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        // Отправляем запрос в API и получаем обновлённые данные карточки
        api
            .updateCardLike(card._id, !isLiked)
            .then((newCard) => {
                setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
            });
    }

    function handleCardDelete(delCard) {
        api
            .deleteCard(delCard._id)
            .then(() => setCards(cards.filter(currentCard => currentCard._id !== delCard._id)))
    }

    React.useEffect(() => {
        api
            .getInitialCards()
            .then((cardListRes) => {
                setCards(cardListRes)
            })
            .catch((err) => {
                console.log(`Ошибка загрузки данных: ${err}`);
            });
    }, [])

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__container">
                    <img
                        src={currentUser.avatar}
                        alt="аватар профиля"
                        className="profile__avatar"
                        onClick={onEditAvatar}
                    />
                    <div className="profile__info">
                        <div className="profile__name-container">
                            <h1 className="profile__name">{currentUser.name}</h1>
                            <button
                                aria-label="Редактировать профиль"
                                type="button"
                                className="profile__edit-button"
                                onClick={onEditProfile}
                            />
                        </div>
                        <p className="profile__job">{currentUser.about}</p>
                    </div>
                </div>
                <button
                    aria-label="Добавить карточку"
                    type="button"
                    className="profile__add-button"
                    onClick={onAddPlace}
                />
            </section>

            <section aria-label="Галерея фотографий" className="elements">
                {cards.map((card) => (
                        <Card
                            key={card._id}
                            link={card.link}
                            name={card.name}
                            counterLikes={card.likes.length}
                            card={card}
                            onCardClick={onCardClick}
                            onCardLike={handleCardLike}
                            onCardDelete={handleCardDelete}
                        />
                    )
                )}
            </section>
        </main>
    )
}

export default Main