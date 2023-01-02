import React from "react";
import { useTranslation } from "react-i18next";

import "../../Slider.scss";

export default function SlideTitle({ title, titleColor }) {
  const { t } = useTranslation();
  return (
    <div className="slide-title" style={{ color: titleColor }}>
      {t(title)}
    </div>
  );
}
