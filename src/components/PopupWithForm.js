function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`}>
      <div className={`popup__container popup__container_type_${props.name}`}>
        <button
          aria-label="Закрыть окно подтверждения"
          type="button"
          className="popup__close-button"
          onClick={props.onClose}
        />
        <h2 className="popup__title">{props.title}</h2>
        <form name={props.name} className={`popup__form popup__form_type_${props.name}`} noValidate>
          {props.children}
          <button type="submit" className="popup__button" value="Да">{props.buttonTitle}</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm