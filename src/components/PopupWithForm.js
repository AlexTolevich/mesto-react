function PopupWithForm({name, title, onClose, buttonTitle, isOpen, ...props}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
      <div className={`popup__container popup__container_type_${name}`}>
        <button
          aria-label="Закрыть окно подтверждения"
          type="button"
          className="popup__close-button"
          onClick={onClose}
        />
        <h2 className="popup__title">{title}</h2>
        <form name={name} className={`popup__form popup__form_type_${name}`} noValidate>
          {props.children}
          <button type="submit" className="popup__button" value="Да">{buttonTitle}</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm