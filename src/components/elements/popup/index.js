import React from "react";
import classNames from "classnames";
import ClosedButton from "../closedButton";
import { Context } from "../../../context";
import CardTopProducts from "../../sections/topProducts/cardTopProducts";
import "./popup.scss";

export default function Popup() {
  const { context, setContext } = React.useContext(Context);
  // console.log(context, "context");

  function removeOverflowForBody() {
    document.body.classList.remove("overflowe");
  }

  // console.log(context.scrollPlace);

  return (
    <div className={classNames("popup", context.isOpen ? "active" : "")}>
      <div
        className={classNames("popup-inner")}
        style={{ top: `${context.scrollPlace + 400}px` }}
      >
        <ClosedButton isOpen={context.isOpen} setIsOpen={context.setIsOpen} />

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
          <CardTopProducts
            id={context.id}
            desc={context.desc}
            name={context.name}
            arabica={context.arabica}
            robasta={context.robasta}
            link={context.link}
            infoEmploye={context.infoEmploye}
            weight={context.weight}
            weightBox={context.weightBox}
            imgUrl={context.imgUrl}
            price={context.price}
            isActiveDot={context.isActiveDot}
          />
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
