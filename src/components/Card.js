import React from 'react';

function Card({link, name, likes, card, onCardClick}) {
  function handleClick() {
    onCardClick(card)
  }

  return (
    <article className="element">
      <img src={link} alt={`Фото ${name}`} className="element__photo" onClick={handleClick}/>
      <div className="element__title-container">
        <h2 className="element__title">{name}</h2>
        <div className="element__like-container">
          <button
            aria-label="Отметить нравится"
            type="button"
            className="element__like"
          />
          <span className="element__likes-count">{likes}</span>
        </div>
      </div>
      <button
        aria-label="Удалить карточку"
        type="button"
        className="element__remove"
      />
    </article>
  )
}

export default Card