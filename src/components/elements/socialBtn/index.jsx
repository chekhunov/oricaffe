import React from "react";

import Player from "../Player";

import "./SocialBtn.scss";

export default function SocialBtn() {
  return (
    <div className="fab">
      <span className="fab-action-button">
        <i className="fab-action-button__icon"></i>
      </span>
      <ul className="fab-buttons">
        <li className="fab-buttons__item">
          <a
            href="https://www.facebook.com/orientalcaffeua"
            className="fab-buttons__link"
            target="_blank"
            rel="noreferrer"
            data-tooltip="Facebook"
          >
            <i className="icon-material icon-material_fb"></i>
          </a>
        </li>

        <li className="fab-buttons__item">
          {/* TODO change Link */}
          <a
            href="https://www.facebook.com/orientalcaffeua"
            className="fab-buttons__link"
            target="_blank"
            rel="noreferrer"
            data-tooltip="Twitter"
          >
            <i className="icon-material icon-material_tw"></i>
          </a>
        </li>

        <li className="fab-buttons__item">
          {/* TODO change Link */}
          <a
            href="https://www.facebook.com/orientalcaffeua"
            className="fab-buttons__link"
            target="_blank"
            rel="noreferrer"
            data-tooltip="Linkedin"
          >
            <i className="icon-material icon-material_li"></i>
          </a>
        </li>

        <li className="fab-buttons__item">
          {/* TODO change Link */}
          <a
            href="https://www.facebook.com/orientalcaffeua"
            className="fab-buttons__link"
            target="_blank"
            rel="noreferrer"
            data-tooltip="Instagram"
          >
            <i className="icon-material icon-material_gp"></i>
          </a>
        </li>

        <li className="fab-buttons__item">
          <Player />
        </li>
      </ul>
    </div>
  );
}
