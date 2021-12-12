import {api} from '../utils/api.js';
import React from 'react';
import Card  from './Card.js';

function Main({onEditAvatar, onAddPlace, onEditProfile, onCardClick}) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getAppInfo()
      .then(([userInfoRes, cardListRes]) => {
        // userId.id = userInfoRes._id;
        setUserName(userInfoRes.name);
        setUserDescription(userInfoRes.about);
        setUserAvatar(userInfoRes.avatar)
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
            src={userAvatar}
            alt="аватар профиля"
            className="profile__avatar"
            onClick={onEditAvatar}
          />
          <div className="profile__info">
            <div className="profile__name-container">
              <h1 className="profile__name">{userName}</h1>
              <button
                aria-label="Редактировать профиль"
                type="button"
                className="profile__edit-button"
                onClick={onEditProfile}
              />
            </div>
            <p className="profile__job">{userDescription}</p>
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
              likes={card.likes.length}
              card={card}
              onCardClick={onCardClick}
            />
          )
        )}
      </section>
    </main>
  )
}

export default Main