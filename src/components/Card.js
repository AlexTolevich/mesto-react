import React from 'react';

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card)
  }

  return (
    <article className="element">
      <img src={props.link} alt={`Фото ${props.name}`} className="element__photo" onClick={handleClick}/>
      <div className="element__title-container">
        <h2 className="element__title">{props.name}</h2>
        <div className="element__like-container">
          <button
            aria-label="Отметить нравится"
            type="button"
            className="element__like"
          />
          <span className="element__likes-count">{props.likes}</span>
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