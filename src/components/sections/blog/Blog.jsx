import React from "react";
import {useTranslation} from "react-i18next";

import BlogImg from '../../../assets/img/blog/blog-section.jpg'
import BlogEl1 from '../../../assets/img/blog/blog-el.jpg'

import "./blog.scss";

export default function Blog() {
  const {t} = useTranslation();

  return (
    <div className="blog">
      <div className="blog__subtitle mb-25">
        {t("blog_section.recommendations_from")}
      </div>

      <div className="blog__content d-flex">
        <img className="blog-img" src={BlogImg} alt="blog" />

        <div className="blog__row blog-row p-20 d-flex flex-column justify-between">
          <a className="blog-row__element d-flex mb-20" href="/blog">
            <img className="blog-row__img" src={BlogEl1} alt="blog-comment" />

            <div className="blog-row__content">
              <div className="blog-row__headline">КАВА 29/08/2022</div>
              <div className="blog-row__text">
                Як вибрати мелену каву? 9 порад від експерта.
              </div>
            </div>
          </a>

          <a className="blog-row__element d-flex mb-20" href="/blog">
            <img className="blog-row__img" src={BlogEl1} alt="blog-comment" />

            <div className="blog-row__content">
              <div className="blog-row__headline">КАВА 03/11/2022</div>
              <div className="blog-row__text">
                Відмінності зерен арабіки та робусти. У чому різниця смаку?
              </div>
            </div>
          </a>

          <a className="blog-row__element d-flex" href="/blog">
            <img className="blog-row__img" src={BlogEl1} alt="blog-comment" />

            <div className="blog-row__content">
              <div className="blog-row__headline">КАВА 21/12/2022</div>
              <div className="blog-row__text">
                Огляд кави Orientalcaffee Rococo.
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
