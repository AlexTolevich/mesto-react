(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(6),s=n.n(o),i=(n(14),n(9)),r=n(2),l=n.p+"static/media/logo-mesto.b8ac1065.svg",u=n(0);var p=function(){return Object(u.jsx)("header",{className:"header",children:Object(u.jsx)("img",{src:l,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u041c\u0435\u0441\u0442\u043e",className:"header__logo"})})},d=c.a.createContext();var _=function(e){var t=e.link,n=e.name,a=e.counterLikes,o=e.card,s=e.onCardClick,i=e.onCardLike,r=e.onCardDelete,l=c.a.useContext(d),p=o.owner._id===l._id,_=o.likes.some((function(e){return e._id===l._id})),h="element__like ".concat(_&&"element__like_active");return Object(u.jsxs)("article",{className:"element",children:[Object(u.jsx)("img",{src:t,alt:"\u0424\u043e\u0442\u043e ".concat(n),className:"element__photo",onClick:function(){s(o)}}),Object(u.jsxs)("div",{className:"element__title-container",children:[Object(u.jsx)("h2",{className:"element__title",children:n}),Object(u.jsxs)("div",{className:"element__like-container",children:[Object(u.jsx)("button",{"aria-label":"\u041e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f",type:"button",className:h,onClick:function(){i(o)}}),Object(u.jsx)("span",{className:"element__likes-count",children:a})]})]}),p&&Object(u.jsx)("button",{"aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",type:"button",className:"element__remove",onClick:function(){r(o)}})]})};var h=function(e){var t=e.onEditAvatar,n=e.onAddPlace,a=e.onEditProfile,o=e.onCardClick,s=e.cards,i=e.onCardLike,r=e.onCardDelete,l=c.a.useContext(d);return Object(u.jsxs)("main",{className:"content",children:[Object(u.jsxs)("section",{className:"profile",children:[Object(u.jsxs)("div",{className:"profile__container",children:[Object(u.jsx)("img",{src:l.avatar,alt:"\u0430\u0432\u0430\u0442\u0430\u0440 \u043f\u0440\u043e\u0444\u0438\u043b\u044f",className:"profile__avatar",onClick:t}),Object(u.jsxs)("div",{className:"profile__info",children:[Object(u.jsxs)("div",{className:"profile__name-container",children:[Object(u.jsx)("h1",{className:"profile__name",children:l.name}),Object(u.jsx)("button",{"aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",type:"button",className:"profile__edit-button",onClick:a})]}),Object(u.jsx)("p",{className:"profile__job",children:l.about})]})]}),Object(u.jsx)("button",{"aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",type:"button",className:"profile__add-button",onClick:n})]}),Object(u.jsx)("section",{"aria-label":"\u0413\u0430\u043b\u0435\u0440\u0435\u044f \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0439",className:"elements",children:s.map((function(e){return Object(u.jsx)(_,{link:e.link,name:e.name,counterLikes:e.likes.length,card:e,onCardClick:o,onCardLike:i,onCardDelete:r},e._id)}))})]})};var m=function(){return Object(u.jsx)("footer",{className:"footer",children:Object(u.jsx)("p",{className:"footer__copyright",lang:"en",children:"\xa9 2021 Mesto Russia"})})};var j=function(e){var t=e.name,n=e.title,a=e.buttonTitle,c=e.isOpen,o=e.onClose,s=e.onSubmit,i=e.children,r=e.onCloseOverlayClick;return Object(u.jsx)("div",{className:"popup popup_type_".concat(t," ").concat(c&&"popup_opened"),onClick:r,children:Object(u.jsxs)("div",{className:"popup__container popup__container_type_".concat(t),children:[Object(u.jsx)("button",{"aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043e\u043a\u043d\u043e \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f",type:"button",className:"popup__close-button",onClick:o}),Object(u.jsx)("h2",{className:"popup__title",children:n}),Object(u.jsxs)("form",{name:t,className:"popup__form popup__form_type_".concat(t),onSubmit:s,children:[i,Object(u.jsx)("button",{type:"submit",className:"popup__button",children:a})]})]})})};var b=function(e){var t=e.card,n=e.onClose,a=e.onCloseOverlayClick;return Object(u.jsx)("div",{className:"popup popup_type_full-screen ".concat(t?"popup_opened":""),onClick:a,children:Object(u.jsxs)("div",{className:"popup__image-container",children:[Object(u.jsx)("img",{src:t?t.link:"",alt:t?t.name:"",className:"popup__image"}),Object(u.jsx)("p",{className:"popup__image-caption",children:t?t.name:""}),Object(u.jsx)("button",{"aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043e\u043a\u043d\u043e \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0439",type:"button",className:"popup__close-button",onClick:n})]})})},f=n(7),O=n(8),v=new(function(){function e(t){Object(f.a)(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}return Object(O.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject(e.status)}},{key:"getAppInfo",value:function(){return Promise.all([this.getUserInfo(),this.getInitialCards()])}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"users/me"),{headers:this._headers}).then(this._checkResponse)}},{key:"setAvatar",value:function(e){return fetch("".concat(this._baseUrl,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._checkResponse)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.description})}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"cards"),{headers:this._headers}).then(this._checkResponse)}},{key:"postNewCard",value:function(e){return fetch("".concat(this._baseUrl,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"updateCardLike",value:function(e,t){return fetch("".concat(this._baseUrl,"cards/likes/").concat(e),{method:t?"PUT":"DELETE",headers:this._headers}).then(this._checkResponse)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-29/",headers:{authorization:"af44a922-d278-427e-a751-f282a0177a52","Content-Type":"application/json"}});var C=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateUser,o=e.onCloseOverlayClick,s=c.a.useContext(d),i=c.a.useState(""),l=Object(r.a)(i,2),p=l[0],_=l[1],h=c.a.useState(""),m=Object(r.a)(h,2),b=m[0],f=m[1];return c.a.useEffect((function(){t&&(_(s.name),f(s.about))}),[s,t]),Object(u.jsxs)(j,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonTitle:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({name:p,description:b})},onCloseOverlayClick:o,children:[Object(u.jsx)("input",{"aria-label":"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",type:"text",name:"popup_name",id:"popup_name",className:"popup__input popup__input_is_name",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448\u0435 \u0438\u043c\u044f",minLength:"2",maxLength:"40",value:p,onChange:function(e){_(e.target.value)},required:!0}),Object(u.jsx)("span",{id:"popup-name-error",className:"popup__error"}),Object(u.jsx)("input",{"aria-label":"\u0420\u043e\u0434 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",type:"text",name:"popup_job",id:"popup_job",className:"popup__input popup__input_is_job",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448 \u0440\u043e\u0434 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",minLength:"2",maxLength:"200",value:b,onChange:function(e){f(e.target.value)},required:!0}),Object(u.jsx)("span",{id:"popup-job-error",className:"popup__error"})]})};var k=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateAvatar,o=e.onCloseOverlayClick,s=c.a.useRef();return c.a.useEffect((function(){s.current.value=""}),[t]),Object(u.jsxs)(j,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonTitle:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({avatar:s.current.value})},onCloseOverlayClick:o,children:[Object(u.jsx)("input",{"aria-label":"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",type:"url",name:"avatar",id:"avatar-img-link",className:"popup__input popup__input_type_avatar-link",required:!0,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",ref:s}),Object(u.jsx)("span",{id:"avatar-img-link-error",className:"popup__error"})]})};var x=function(e){var t=e.isOpen,n=e.onClose,a=e.onAddPlace,o=e.onCloseOverlayClick,s=c.a.useState(""),i=Object(r.a)(s,2),l=i[0],p=i[1],d=c.a.useState(""),_=Object(r.a)(d,2),h=_[0],m=_[1];return c.a.useEffect((function(){p(""),m("")}),[t]),Object(u.jsxs)(j,{name:"add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonTitle:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({name:l,link:h})},onCloseOverlayClick:o,children:[Object(u.jsx)("input",{"aria-label":"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0444\u043e\u0442\u043e",type:"text",name:"name",id:"place-name",className:"popup__input popup__input_is_place-name",required:!0,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30",onChange:function(e){p(e.target.value)},value:l}),Object(u.jsx)("span",{id:"place-name-error",className:"popup__error"}),Object(u.jsx)("input",{"aria-label":"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",type:"url",name:"link",id:"place-img-link",className:"popup__input popup__input_is_img-link",required:!0,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",onChange:function(e){m(e.target.value)},value:h}),Object(u.jsx)("span",{id:"place-img-link-error",className:"popup__error"})]})};var g=function(){var e=c.a.useState(!1),t=Object(r.a)(e,2),n=t[0],a=t[1],o=c.a.useState(!1),s=Object(r.a)(o,2),l=s[0],_=s[1],f=c.a.useState(!1),O=Object(r.a)(f,2),g=O[0],y=O[1],N=c.a.useState(null),L=Object(r.a)(N,2),S=L[0],U=L[1],E=c.a.useState({}),P=Object(r.a)(E,2),A=P[0],T=P[1],D=c.a.useState([]),I=Object(r.a)(D,2),R=I[0],w=I[1];function q(e){e.target.classList.contains("popup_opened")&&J()}function J(){_(!1),y(!1),a(!1),U(null)}return c.a.useEffect((function(){function e(e){"Escape"===e.key&&J()}return v.getAppInfo().then((function(e){var t=Object(r.a)(e,2),n=t[0],a=t[1];T(n),w(a)})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445: ".concat(e))})),document.addEventListener("keyup",e),function(){return document.removeEventListener("keyup",e)}}),[]),Object(u.jsx)(d.Provider,{value:A,children:Object(u.jsxs)("div",{className:"root",children:[Object(u.jsx)(p,{}),Object(u.jsx)(h,{onEditAvatar:function(){y(!0)},onEditProfile:function(){a(!0)},onAddPlace:function(){_(!0)},onCardClick:function(e){U(e)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===A._id}));v.updateCardLike(e._id,!t).then((function(t){w((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u043b\u0430\u0439\u043a\u0430: ".concat(e))}))},onCardDelete:function(e){v.deleteCard(e._id).then((function(){return w(R.filter((function(t){return t._id!==e._id})))})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438: ".concat(e))}))},cards:R}),Object(u.jsx)(m,{}),Object(u.jsx)(b,{card:S,onClose:J,onCloseOverlayClick:q}),Object(u.jsx)(C,{isOpen:n,onClose:J,onUpdateUser:function(e){v.setUserInfo(e).then((function(e){T(e),J()})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u0440\u043e\u0444\u0438\u043b\u044f: ".concat(e))}))},onCloseOverlayClick:q}),Object(u.jsx)(x,{isOpen:l,onClose:J,onAddPlace:function(e){v.postNewCard(e).then((function(e){w([e].concat(Object(i.a)(R))),J()})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438: ".concat(e))}))},onCloseOverlayClick:q}),Object(u.jsx)(k,{isOpen:g,onClose:J,onUpdateAvatar:function(e){v.setAvatar(e).then((function(e){T(e),J()})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0430\u0432\u0430\u0442\u0430\u0440\u0430: ".concat(e))}))},onCloseOverlayClick:q}),Object(u.jsx)(j,{name:"confirmation",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",isOpen:!1,onClose:J,onCloseOverlayClick:q,buttonTitle:"\u0414\u0430"})]})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),o(e),s(e)}))};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),y()}},[[16,1,2]]]);
//# sourceMappingURL=main.bc860a08.chunk.js.map