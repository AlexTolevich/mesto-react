function ImagePopup(props) {
  return (
    <div className={`popup popup_type_full-screen ${props.card ? 'popup_opened' : ''}`}>
      <div className="popup__image-container">
        <img src={props.card ? props.card.link : ''} alt={props.card ? props.card.name : ''} className="popup__image"/>
        <p className="popup__image-caption">{props.card ? props.card.name : ''}</p>
        <button
          aria-label="Закрыть окно просмотра фотографий"
          type="button"
          className="popup__close-button"
          onClick={props.onClose}
        />
      </div>
    </div>
  )
}

export default ImagePopup