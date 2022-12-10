import React from "react";
import classNames from "classnames";
import ClosedButton from "../../closedButton";
import AppContext from "../../../context";
import CardEmploye from "../../employes/cardEmploye";

export default function Popup() {
  const { popupContent, setPopupContent } = React.useContext(AppContext);

  function removeOverflowForBody() {
    document.body.classList.remove("overflowe");
  }

  return (
    <div className={classNames("popup", popupContent.isOpen ? "active" : "")}>
      <div className={classNames("popup-inner")}>
        <ClosedButton
          isOpen={popupContent.isOpen}
          setIsOpen={popupContent.setIsOpen}
        />

        {!popupContent.showEmployeCard && (
          <div className="popup-title title">{popupContent.title}</div>
        )}
        {!popupContent.showEmployeCard && (
          <div
            className="popup-text"
            dangerouslySetInnerHTML={{ __html: popupContent.text }}
          ></div>
        )}

        {popupContent.showEmployeCard && (
          <CardEmploye
            id={popupContent.id}
            name={popupContent.name}
            lastName={popupContent.lastName}
            profession={popupContent.profession}
            link={popupContent.link}
            infoEmploye={popupContent.infoEmploye}
            professionDesc={popupContent.professionDesc}
            practisAllYars={popupContent.practisAllYars}
            imgUrl={popupContent.imgUrl}
            practisScientificYars={popupContent.practisScientificYars}
            isActiveDot={popupContent.isActiveDot}
          />
        )}

        {(popupContent.showButton || popupContent.showEmployeCard) && (
          <button
            className={classNames("consultation__btn", "button-color")}
            onClick={(e) => {
              removeOverflowForBody();
              setPopupContent(popupContent.isOpen);
            }}
          >
            Хорошо
          </button>
        )}
      </div>
    </div>
  );
}
