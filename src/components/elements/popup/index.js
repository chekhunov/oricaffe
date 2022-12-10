import React from "react";
import classNames from "classnames";
import ClosedButton from "../closedButton";
import { Context } from "../../../context";
// import CardEmploye from "../../employes/cardEmploye";

export default function Popup() {
  const { context, setContext } = React.useContext(Context);

  function removeOverflowForBody() {
    document.body.classList.remove("overflowe");
  }

  return (
    <div className={classNames("popup", context.isOpen ? "active" : "")}>
      <div className={classNames("popup-inner")}>
        <ClosedButton
          isOpen={context.isOpen}
          setIsOpen={context.setIsOpen}
        />

        {!context.showEmployeCard && (
          <div className="popup-title title">{context.title}</div>
        )}
        {!context.showEmployeCard && (
          <div
            className="popup-text"
            dangerouslySetInnerHTML={{ __html: context.text }}
          ></div>
        )}

        {context.showEmployeCard && (
          <div>test</div>
          // <CardEmploye
          //   id={popupContent.id}
          //   name={popupContent.name}
          //   lastName={popupContent.lastName}
          //   profession={popupContent.profession}
          //   link={popupContent.link}
          //   infoEmploye={popupContent.infoEmploye}
          //   professionDesc={popupContent.professionDesc}
          //   practisAllYars={popupContent.practisAllYars}
          //   imgUrl={popupContent.imgUrl}
          //   practisScientificYars={popupContent.practisScientificYars}
          //   isActiveDot={popupContent.isActiveDot}
          // />
        )}

        {(context.showButton || context.showEmployeCard) && (
          <button
            className={classNames("consultation__btn", "button-color")}
            onClick={(e) => {
              removeOverflowForBody();
              setContext(context.isOpen);
            }}
          >
            Хорошо
          </button>
        )}
      </div>
    </div>
  );
}
