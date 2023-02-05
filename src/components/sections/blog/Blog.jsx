import React from "react";
import cn from "classnames";
import {useTranslation} from "react-i18next";

import Button from "../../elements/button";
import BlogImg from '../../../assets/img/blog/blog-section.jpg'
import BlogEl1 from '../../../assets/img/blog/blog-el.jpg'

import "./blog.scss";

export default function Blog() {
  const {t} = useTranslation();

  const blog_attributes = {
    button: "more_info",
    urlButton: "blog",
    sx: {
      width: "200px",
    },
  };

  return (
    <div className="blog">
      <div className="blog__subtitle mb-25">
        {t("blog_section.recommendations_from")}
      </div>

      <div className="blog__content d-flex">
        <img
          className="blog-img mr-20"
          src={BlogImg}
          alt="blog"
        />

        <div className="blog__row blog-row p-20 d-flex flex-column justify-between">
          <a className="blog-row__element d-flex mb-20" href="/blog">
            <img
              className="blog-row__img mr-20"
              height={250}
              src={BlogEl1}
              alt="blog-comment"
            />

            <div className="blog-row__content">
              <div className="blog-row__headline">КОФЕ 29/08/2022</div>
              <div className="blog-row__text">Как выбрать молотый кофе? 9 советов от эксперта.</div>
            </div>
          </a>

          <a className="blog-row__element d-flex mb-20" href="/blog">
            <img
              className="blog-row__img mr-20"
              src={BlogEl1}
              alt="blog-comment"
            />

            <div className="blog-row__content">
              <div className="blog-row__headline">КОФЕ 29/08/2022</div>
              <div className="blog-row__text">Различия зёрен арабики и робусты. В чём разница во вкусе?</div>
            </div>
          </a>

          <a className="blog-row__element d-flex" href="/blog">
            <img
              height={250}
              className="blog-row__img mr-20"
              src={BlogEl1}
              alt="blog-comment"
            />

            <div className="blog-row__content">
              <div className="blog-row__headline">КОФЕ 29/08/2022</div>
              <div className="blog-row__text">Обзор кофе Oriental-caffee Rococo.</div>
            </div>
          </a>
        </div>
      </div>

    </div>
  );
}
