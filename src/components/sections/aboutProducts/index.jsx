import React from "react";
import { useTranslation } from "react-i18next";

import Button from "../../elements/button";

import grani from "../../../assets/img/aboutProducts/beans.webp";
import green from "../../../assets/img/aboutProducts/beans-green.webp";
import moka from "../../../assets/img/aboutProducts/icona_moka.webp";
import chald from "../../../assets/img/aboutProducts/icona_cialda.webp";
import capsule from "../../../assets/img/aboutProducts/icona_NESPRESSO.webp";

import aboutGround from "../../../assets/icons/aboutGround.webp";
import singleDoses from "../../../assets/icons/single-doses.webp";
import nespresso from "../../../assets/icons/nespresso.webp";
import greenCoffeGround from "../../../assets/icons/greenCoffeGround.webp";

import "./aboutProducts.scss";
import { SHOP_ROUTE } from "../../../types/const";

const coffeGrani = {
  button: "more",
  urlButton: SHOP_ROUTE + "/coffee",
  sx: {
    width: "200px",
  },
};

const coffeGround = {
  button: "more",
  urlButton: SHOP_ROUTE + "/coffee",
  sx: {
    width: "200px",
  },
};

const coffeNespresso = {
  button: "more",
  urlButton: SHOP_ROUTE + "/coffee",
  sx: {
    width: "200px",
  },
};

const coffeGreen = {
  button: "more",
  urlButton: SHOP_ROUTE + "/coffee",
  sx: {
    width: "200px",
  },
};

export default function AboutProducts({ textAccent, bgColor }) {
  const { t } = useTranslation();

  return (
    <section className="about-products">
      <div className="container">
        <h2
          className="about-products__desc"
          style={{
            color: textAccent,
            backgroundColor: bgColor,
          }}
        >
          {t("production_company")}
          <a
            className="oriental-link ml-10"
            href="https://bhousecoffee.com/"
            target={"_blank"}
            rel="noreferrer"
          >
            Orientalcaffe
          </a>
        </h2>

        <div className="about-products__content">
          <div className="about-products__subtitle mb-25">
            {t("about_products.subtitle")}
          </div>

          <div className="about-products__inner">
            <div className="about-products__row about-row mb-40 p-20 d-flex">
              <svg
                className="about-products__label--svg"
                width="41"
                height="62"
                viewBox="0 0 41 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.05078 3.73047C1.05078 2.6259 1.94621 1.73047 3.05078 1.73047H20.7402H38.4295C39.5341 1.73047 40.4295 2.6259 40.4295 3.73047V58.3489C40.4295 59.8699 38.799 60.8342 37.4661 60.1016L20.7402 50.9078L4.01418 60.1016C2.68128 60.8342 1.05078 59.8699 1.05078 58.3489V3.73047Z"
                  fill="#57111C"
                />
                <mask id="path-2-inside-1_308_277" fill="white">
                  <path d="M4.07578 18.488C4.05037 18.569 4.05048 18.6536 4.07556 18.7358C4.10218 19.6654 4.46411 20.5954 5.16221 21.3149L5.48951 21.6522C9.28633 25.5654 15.4032 25.6927 19.1549 21.9368C19.8268 21.2641 20.1779 20.3785 20.2103 19.4747C20.2357 19.3937 20.2355 19.3091 20.2105 19.2269C20.1839 18.2973 19.8219 17.3673 19.1238 16.6478L18.7965 16.3105C14.9997 12.3973 8.88285 12.2699 5.13114 16.0259C4.45926 16.6985 4.10809 17.5842 4.07578 18.488ZM6.1364 21.0047L5.8091 20.6673C5.30874 20.1516 5.03841 19.4918 4.99793 18.8258C6.84398 17.1276 9.61627 17.3628 11.658 19.4671C13.6807 21.5518 16.7478 21.9049 19.0283 20.5095C18.8993 20.7832 18.7238 21.0385 18.5004 21.2622C15.1044 24.6619 9.57317 24.5467 6.1364 21.0047ZM18.1497 16.958L18.477 17.2954C18.9774 17.8111 19.2478 18.471 19.2882 19.1371C17.3371 20.9389 14.2533 20.8278 12.3047 18.8195C10.21 16.6606 7.41457 16.1721 5.2529 17.4633C5.38237 17.1858 5.55954 16.927 5.78569 16.7006C9.18167 13.3008 14.7129 13.416 18.1497 16.958Z" />
                </mask>
                <path
                  d="M4.07578 18.488C4.05037 18.569 4.05048 18.6536 4.07556 18.7358C4.10218 19.6654 4.46411 20.5954 5.16221 21.3149L5.48951 21.6522C9.28633 25.5654 15.4032 25.6927 19.1549 21.9368C19.8268 21.2641 20.1779 20.3785 20.2103 19.4747C20.2357 19.3937 20.2355 19.3091 20.2105 19.2269C20.1839 18.2973 19.8219 17.3673 19.1238 16.6478L18.7965 16.3105C14.9997 12.3973 8.88285 12.2699 5.13114 16.0259C4.45926 16.6985 4.10809 17.5842 4.07578 18.488ZM6.1364 21.0047L5.8091 20.6673C5.30874 20.1516 5.03841 19.4918 4.99793 18.8258C6.84398 17.1276 9.61627 17.3628 11.658 19.4671C13.6807 21.5518 16.7478 21.9049 19.0283 20.5095C18.8993 20.7832 18.7238 21.0385 18.5004 21.2622C15.1044 24.6619 9.57317 24.5467 6.1364 21.0047ZM18.1497 16.958L18.477 17.2954C18.9774 17.8111 19.2478 18.471 19.2882 19.1371C17.3371 20.9389 14.2533 20.8278 12.3047 18.8195C10.21 16.6606 7.41457 16.1721 5.2529 17.4633C5.38237 17.1858 5.55954 16.927 5.78569 16.7006C9.18167 13.3008 14.7129 13.416 18.1497 16.958Z"
                  fill="black"
                />
                <path
                  d="M4.07578 18.488L5.9664 19.0995L6.0489 18.8365L6.05876 18.5606L4.07578 18.488ZM4.07556 18.7358L6.05901 18.6768L6.05113 18.4018L5.97098 18.139L4.07556 18.7358ZM20.2103 19.4747L18.3196 18.8632L18.2372 19.1262L18.2273 19.4019L20.2103 19.4747ZM20.2105 19.2269L18.2271 19.286L18.2349 19.5601L18.3146 19.8221L20.2105 19.2269ZM5.13114 16.0259L3.73842 14.5905L5.13114 16.0259ZM4.99793 18.8258L3.66613 17.3319L2.9586 17.9828L3.01741 18.9504L4.99793 18.8258ZM19.0283 20.5095L20.8179 21.3799L23.6796 15.3108L18.0047 18.7831L19.0283 20.5095ZM18.5004 21.2622L19.8931 22.6976L19.8931 22.6976L18.5004 21.2622ZM19.2882 19.1371L20.6228 20.6284L21.3273 19.9778L21.2687 19.0126L19.2882 19.1371ZM5.2529 17.4633L3.45979 16.6005L0.697008 22.5227L6.25843 19.2007L5.2529 17.4633ZM2.18515 17.8764C2.03339 18.3602 2.03803 18.8668 2.18013 19.3327L5.97098 18.139C6.06293 18.4405 6.06734 18.7777 5.9664 19.0995L2.18515 17.8764ZM2.09211 18.7949C2.13276 20.2144 2.68596 21.6345 3.74879 22.7299L6.57562 19.8999C6.24227 19.5563 6.0716 19.1164 6.05901 18.6768L2.09211 18.7949ZM3.74879 22.7299L4.07609 23.0672L6.90292 20.2372L6.57562 19.8999L3.74879 22.7299ZM4.07609 23.0672C8.6068 27.7367 15.98 27.945 20.5476 23.3722L17.7622 20.5014C14.8264 23.4405 9.96585 23.394 6.90292 20.2372L4.07609 23.0672ZM20.5476 23.3722C21.6026 22.316 22.1437 20.9325 22.1932 19.5475L18.2273 19.4019C18.2122 19.8244 18.0511 20.2122 17.7622 20.5014L20.5476 23.3722ZM22.1009 20.0862C22.2528 19.6019 22.2476 19.096 22.1065 18.6316L18.3146 19.8221C18.2234 19.5222 18.2185 19.1855 18.3196 18.8632L22.1009 20.0862ZM22.194 19.1677C22.1533 17.7483 21.6001 16.3282 20.5373 15.2328L17.7104 18.0628C18.0438 18.4064 18.2145 18.8463 18.2271 19.286L22.194 19.1677ZM20.5373 15.2328L20.21 14.8954L17.3831 17.7255L17.7104 18.0628L20.5373 15.2328ZM20.21 14.8954C15.6792 10.2259 8.30608 10.0177 3.73842 14.5905L6.52385 17.4613C9.45962 14.5222 14.3202 14.5687 17.3831 17.7255L20.21 14.8954ZM3.73842 14.5905C2.68358 15.6465 2.14232 17.03 2.09279 18.4153L6.05876 18.5606C6.07386 18.1383 6.23494 17.7505 6.52385 17.4613L3.73842 14.5905ZM7.54982 19.5897L7.22252 19.2523L4.39569 22.0824L4.72299 22.4197L7.54982 19.5897ZM7.22252 19.2523C7.07025 19.0954 6.99048 18.8991 6.97845 18.7011L3.01741 18.9504C3.08634 20.0845 3.54723 21.2079 4.39569 22.0824L7.22252 19.2523ZM6.32973 20.3196C7.22221 19.4986 8.78198 19.3747 10.2446 20.8821L13.0714 18.052C10.4506 15.3509 6.46575 14.7565 3.66613 17.3319L6.32973 20.3196ZM10.2446 20.8821C12.8974 23.6162 16.9692 24.1222 20.0519 22.236L18.0047 18.7831C16.5264 19.6876 14.464 19.4873 13.0714 18.052L10.2446 20.8821ZM17.2388 19.6392C17.2053 19.7102 17.1619 19.7725 17.1077 19.8268L19.8931 22.6976C20.2857 22.3045 20.5933 21.8563 20.8179 21.3799L17.2388 19.6392ZM17.1077 19.8268C14.5276 22.4097 10.2527 22.3753 7.54982 19.5897L4.72299 22.4197C8.89365 26.7181 15.6811 26.9141 19.8931 22.6976L17.1077 19.8268ZM16.7363 18.3731L17.0636 18.7104L19.8904 15.8804L19.5631 15.543L16.7363 18.3731ZM17.0636 18.7104C17.2159 18.8674 17.2956 19.0637 17.3077 19.2617L21.2687 19.0126C21.1999 17.8783 20.7389 16.7548 19.8904 15.8804L17.0636 18.7104ZM17.9536 17.6459C16.8298 18.6837 14.9573 18.6816 13.7182 17.4045L10.8913 20.2345C13.5494 22.974 17.8444 23.1942 20.6228 20.6284L17.9536 17.6459ZM13.7182 17.4045C11.1114 14.7178 7.33797 13.8799 4.24736 15.7259L6.25843 19.2007C7.49117 18.4644 9.30862 18.6033 10.8913 20.2345L13.7182 17.4045ZM7.046 18.3261C7.07938 18.2546 7.12317 18.1913 7.17841 18.136L4.39298 15.2652C3.99591 15.6627 3.68536 16.117 3.45979 16.6005L7.046 18.3261ZM7.17841 18.136C9.75843 15.553 14.0334 15.5874 16.7363 18.3731L19.5631 15.543C15.3924 11.2446 8.6049 11.0485 4.39298 15.2652L7.17841 18.136Z"
                  fill="white"
                  mask="url(#path-2-inside-1_308_277)"
                />
                <mask id="path-4-inside-2_308_277" fill="white">
                  <path d="M27.3835 26.7332C27.1525 26.1665 26.8567 25.6645 26.4639 25.2597C26.2149 25.003 25.9325 24.7799 25.6269 24.596C25.5825 24.5561 25.5291 24.5262 25.4719 24.5075C24.6032 24.0341 23.5692 23.8723 22.586 24.1543L22.1313 24.277C19.7282 25.0203 17.8184 26.6662 16.7258 28.9571C15.6012 31.3464 15.5198 34.0881 16.4459 36.6855C16.7817 37.6664 17.466 38.4377 18.2992 38.9077C18.3693 38.9758 18.4566 39.0225 18.5487 39.0383C19.385 39.4363 20.344 39.5404 21.2434 39.2643L21.6981 39.1416C24.1012 38.3983 26.011 36.7524 27.1036 34.4616C28.261 32.1059 28.3425 29.3643 27.3835 26.7332ZM17.5745 29.4375C18.5709 27.376 20.2862 25.8583 22.4621 25.2094L22.9168 25.0867C23.5756 24.887 24.2842 24.963 24.9088 25.2524C25.2933 26.5119 25.1903 27.8132 24.5981 28.8566C23.9868 30.0007 22.8524 30.7373 21.5202 31.007C21.5202 31.007 21.4875 30.9733 21.4551 31.0057C18.8283 31.9753 17.4167 34.5867 17.834 37.3769C17.5997 37.0943 17.4235 36.7878 17.2903 36.4387C16.4632 34.0747 16.5462 31.5976 17.5745 29.4375ZM21.3678 38.2753L20.9453 38.3657C20.2846 38.6042 19.5826 38.534 18.9654 38.2519C18.052 35.5422 19.2426 32.7899 21.7855 31.8719C23.3453 31.5739 24.7061 30.6106 25.4464 29.2709C25.9669 28.3291 26.1807 27.2666 26.0667 26.1748C26.2659 26.4318 26.428 26.7239 26.5395 27.0462C27.3667 29.4101 27.2836 31.8873 26.2553 34.0473C25.259 36.1088 23.5437 37.6266 21.3678 38.2753Z" />
                </mask>
                <path
                  d="M27.3835 26.7332C27.1525 26.1665 26.8567 25.6645 26.4639 25.2597C26.2149 25.003 25.9325 24.7799 25.6269 24.596C25.5825 24.5561 25.5291 24.5262 25.4719 24.5075C24.6032 24.0341 23.5692 23.8723 22.586 24.1543L22.1313 24.277C19.7282 25.0203 17.8184 26.6662 16.7258 28.9571C15.6012 31.3464 15.5198 34.0881 16.4459 36.6855C16.7817 37.6664 17.466 38.4377 18.2992 38.9077C18.3693 38.9758 18.4566 39.0225 18.5487 39.0383C19.385 39.4363 20.344 39.5404 21.2434 39.2643L21.6981 39.1416C24.1012 38.3983 26.011 36.7524 27.1036 34.4616C28.261 32.1059 28.3425 29.3643 27.3835 26.7332ZM17.5745 29.4375C18.5709 27.376 20.2862 25.8583 22.4621 25.2094L22.9168 25.0867C23.5756 24.887 24.2842 24.963 24.9088 25.2524C25.2933 26.5119 25.1903 27.8132 24.5981 28.8566C23.9868 30.0007 22.8524 30.7373 21.5202 31.007C21.5202 31.007 21.4875 30.9733 21.4551 31.0057C18.8283 31.9753 17.4167 34.5867 17.834 37.3769C17.5997 37.0943 17.4235 36.7878 17.2903 36.4387C16.4632 34.0747 16.5462 31.5976 17.5745 29.4375ZM21.3678 38.2753L20.9453 38.3657C20.2846 38.6042 19.5826 38.534 18.9654 38.2519C18.052 35.5422 19.2426 32.7899 21.7855 31.8719C23.3453 31.5739 24.7061 30.6106 25.4464 29.2709C25.9669 28.3291 26.1807 27.2666 26.0667 26.1748C26.2659 26.4318 26.428 26.7239 26.5395 27.0462C27.3667 29.4101 27.2836 31.8873 26.2553 34.0473C25.259 36.1088 23.5437 37.6266 21.3678 38.2753Z"
                  fill="black"
                />
                <path
                  d="M27.3835 26.7332L29.2444 26.033L29.2313 25.9971L29.2168 25.9616L27.3835 26.7332ZM25.6269 24.596L24.3144 26.1079L24.4545 26.2334L24.6151 26.3301L25.6269 24.596ZM25.4719 24.5075L24.5335 26.2836L24.6919 26.37L24.863 26.426L25.4719 24.5075ZM22.586 24.1543L23.0951 26.1023L23.11 26.0983L23.1248 26.094L22.586 24.1543ZM22.1313 24.277L21.6221 22.3291L21.5877 22.3383L21.5537 22.3489L22.1313 24.277ZM16.7258 28.9571L14.9401 28.0786L14.9356 28.088L16.7258 28.9571ZM16.4459 36.6855L18.3202 36.0232L18.316 36.0109L18.3116 35.9987L16.4459 36.6855ZM18.2992 38.9077L19.6708 37.4508L19.4862 37.2715L19.2629 37.1455L18.2992 38.9077ZM18.5487 39.0383L19.3909 37.2131L19.1467 37.0969L18.8808 37.0511L18.5487 39.0383ZM21.2434 39.2643L20.7343 37.3163L20.7019 37.325L20.6698 37.3349L21.2434 39.2643ZM21.6981 39.1416L22.2073 41.0896L22.2417 41.0803L22.2757 41.0697L21.6981 39.1416ZM27.1036 34.4616L25.3282 33.5618L25.3229 33.5724L25.3179 33.5831L27.1036 34.4616ZM17.5745 29.4375L15.7933 28.5495L15.7882 28.5604L17.5745 29.4375ZM22.4621 25.2094L21.953 23.2614L21.9282 23.2681L21.9036 23.2755L22.4621 25.2094ZM22.9168 25.0867L23.426 27.0347L23.455 27.0269L23.4838 27.0181L22.9168 25.0867ZM24.9088 25.2524L26.8041 24.6551L26.541 23.7931L25.7327 23.4186L24.9088 25.2524ZM24.5981 28.8566L22.8791 27.8503L22.8664 27.8727L22.8542 27.8954L24.5981 28.8566ZM21.5202 31.007L20.1068 32.422L20.8579 33.1962L21.9076 32.9837L21.5202 31.007ZM21.4551 31.0057L22.1325 32.9L22.5394 32.7498L22.8478 32.4411L21.4551 31.0057ZM17.834 37.3769L16.3162 38.6755L20.854 44.1488L19.7958 37.0737L17.834 37.3769ZM17.2903 36.4387L15.4206 37.1141L15.43 37.1408L15.4401 37.1673L17.2903 36.4387ZM21.3678 38.2753L21.7762 40.2477L21.852 40.2315L21.9263 40.2093L21.3678 38.2753ZM20.9453 38.3657L20.5369 36.3934L20.4067 36.4212L20.2813 36.4665L20.9453 38.3657ZM18.9654 38.2519L17.0881 38.9052L17.3666 39.7315L18.1508 40.0899L18.9654 38.2519ZM21.7855 31.8719L21.4191 29.8911L21.2672 29.9201L21.1215 29.9727L21.7855 31.8719ZM25.4464 29.2709L23.7161 28.2846L23.7161 28.2846L25.4464 29.2709ZM26.0667 26.1748L27.6262 24.9281L23.3675 19.4307L24.0935 26.3877L26.0667 26.1748ZM26.5395 27.0462L24.6673 27.7145L24.6697 27.7216L26.5395 27.0462ZM26.2553 34.0473L28.0365 34.9353L28.0417 34.9245L26.2553 34.0473ZM29.2168 25.9616C28.9175 25.2274 28.4969 24.4832 27.8774 23.8447L25.0505 26.6747C25.2166 26.8458 25.3874 27.1055 25.5502 27.5047L29.2168 25.9616ZM27.8774 23.8447C27.506 23.4619 27.0879 23.1322 26.6388 22.8619L24.6151 26.3301C24.777 26.4275 24.9238 26.5442 25.0505 26.6747L27.8774 23.8447ZM26.9395 23.084C26.6765 22.8485 26.3793 22.6867 26.0808 22.589L24.863 26.426C24.679 26.3657 24.4884 26.2638 24.3144 26.1079L26.9395 23.084ZM26.4103 22.7313C25.1403 22.0392 23.5788 21.7753 22.0472 22.2146L23.1248 26.094C23.5597 25.9693 24.0661 26.0289 24.5335 26.2836L26.4103 22.7313ZM22.0769 22.2063L21.6221 22.3291L22.6404 26.225L23.0951 26.1023L22.0769 22.2063ZM21.5537 22.3489C18.6281 23.2537 16.2768 25.2759 14.9401 28.0786L18.5115 29.8355C19.3601 28.0564 20.8284 26.7868 22.7088 26.2052L21.5537 22.3489ZM14.9356 28.088C13.5643 31.0016 13.4871 34.3066 14.5802 37.3722L18.3116 35.9987C17.5524 33.8696 17.6381 31.6913 18.516 29.8261L14.9356 28.088ZM14.5717 37.3478C15.0782 38.8278 16.1053 39.9759 17.3356 40.6699L19.2629 37.1455C18.8267 36.8995 18.4851 36.5051 18.3202 36.0232L14.5717 37.3478ZM16.9276 40.3646C17.2585 40.686 17.6998 40.9366 18.2166 41.0256L18.8808 37.0511C19.2133 37.1083 19.4801 37.2657 19.6708 37.4508L16.9276 40.3646ZM17.7065 40.8636C18.9431 41.452 20.4057 41.6269 21.817 41.1937L20.6698 37.3349C20.2823 37.4538 19.827 37.4206 19.3909 37.2131L17.7065 40.8636ZM21.7525 41.2123L22.2073 41.0896L21.189 37.1936L20.7343 37.3163L21.7525 41.2123ZM22.2757 41.0697C25.2013 40.1649 27.5526 38.1427 28.8893 35.34L25.3179 33.5831C24.4693 35.3622 23.001 36.6318 21.1206 37.2134L22.2757 41.0697ZM28.879 35.3613C30.3054 32.4581 30.3741 29.1327 29.2444 26.033L25.5226 27.4333C26.3108 29.5959 26.2165 31.7537 25.3282 33.5618L28.879 35.3613ZM19.3557 30.3255C20.1177 28.7489 21.4016 27.6262 23.0206 27.1434L21.9036 23.2755C19.1708 24.0903 17.0242 26.003 15.7934 28.5496L19.3557 30.3255ZM22.9712 27.1574L23.426 27.0347L22.4077 23.1387L21.953 23.2614L22.9712 27.1574ZM23.4838 27.0181C23.6326 26.973 23.8472 26.9761 24.0849 27.0863L25.7327 23.4186C24.7213 22.95 23.5186 22.8011 22.3499 23.1553L23.4838 27.0181ZM23.0135 25.8498C23.257 26.6473 23.1592 27.3567 22.8791 27.8503L26.3172 29.863C27.2213 28.2698 27.3296 26.3765 26.8041 24.6551L23.0135 25.8498ZM22.8542 27.8954C22.5795 28.4096 22.0112 28.8525 21.1328 29.0303L21.9076 32.9837C23.6937 32.6222 25.394 31.5919 26.342 29.8179L22.8542 27.8954ZM21.5202 31.007C22.9336 29.592 22.9329 29.5913 22.9323 29.5906C22.932 29.5904 22.9314 29.5897 22.9309 29.5893C22.93 29.5884 22.9291 29.5874 22.9282 29.5865C22.9264 29.5847 22.9246 29.5828 22.9228 29.5809C22.9191 29.5772 22.9153 29.5734 22.9114 29.5696C22.9037 29.5619 22.8957 29.5539 22.8873 29.5458C22.8705 29.5296 22.8521 29.5124 22.8321 29.4945C22.7925 29.459 22.744 29.4182 22.6866 29.3756C22.5798 29.2962 22.4026 29.1804 22.161 29.0937C21.9125 29.0045 21.551 28.9313 21.1283 29.0084C20.6876 29.0889 20.3257 29.3067 20.0624 29.5703L22.8478 32.4411C22.6007 32.6885 22.255 32.8983 21.8296 32.976C21.422 33.0504 21.0748 32.9795 20.8386 32.8948C20.6092 32.8125 20.4422 32.703 20.3425 32.6289C20.2887 32.589 20.243 32.5506 20.2053 32.5168C20.1862 32.4997 20.1686 32.4832 20.1523 32.4675C20.1441 32.4596 20.1363 32.4519 20.1287 32.4443C20.1249 32.4405 20.1212 32.4368 20.1175 32.4331C20.1157 32.4312 20.1139 32.4294 20.1121 32.4275C20.1112 32.4266 20.1103 32.4257 20.1094 32.4248C20.109 32.4243 20.1083 32.4236 20.1081 32.4234C20.1074 32.4227 20.1068 32.422 21.5202 31.007ZM20.7778 29.1113C17.2036 30.4306 15.3224 34.0041 15.8723 37.6801L19.7958 37.0737C19.511 35.1694 20.4531 33.5199 22.1325 32.9L20.7778 29.1113ZM19.3519 36.0784C19.2648 35.9733 19.1982 35.8611 19.1406 35.7101L15.4401 37.1673C15.6488 37.7144 15.9347 38.2154 16.3162 38.6755L19.3519 36.0784ZM19.1601 35.7633C18.4958 33.865 18.5822 31.9502 19.3609 30.3147L15.7882 28.5604C14.5102 31.2449 14.4306 34.2845 15.4206 37.1141L19.1601 35.7633ZM20.9593 36.303L20.5369 36.3934L21.3538 40.338L21.7762 40.2477L20.9593 36.303ZM20.2813 36.4665C20.1724 36.5058 20.0026 36.5155 19.78 36.4138L18.1508 40.0899C19.1626 40.5525 20.3968 40.7026 21.6094 40.2649L20.2813 36.4665ZM20.8427 37.5985C20.2445 35.8239 21.0352 34.2817 22.4496 33.7711L21.1215 29.9727C17.4499 31.298 15.8594 35.2604 17.0881 38.9052L20.8427 37.5985ZM22.152 33.8528C24.2517 33.4515 26.1309 32.1495 27.1767 30.2572L23.7161 28.2846C23.2812 29.0717 22.439 29.6962 21.4191 29.8911L22.152 33.8528ZM27.1767 30.2572C27.9012 28.9461 28.1967 27.4637 28.04 25.9619L24.0935 26.3877C24.1646 27.0694 24.0325 27.7122 23.7161 28.2846L27.1767 30.2572ZM24.5072 27.4214C24.5781 27.5129 24.6315 27.611 24.6673 27.7145L28.4116 26.3778C28.2246 25.8368 27.9537 25.3508 27.6262 24.9281L24.5072 27.4214ZM24.6697 27.7216C25.334 29.6199 25.2476 31.5346 24.469 33.1702L28.0417 34.9245C29.3197 32.24 29.3993 29.2003 28.4092 26.3707L24.6697 27.7216ZM24.4741 33.1594C23.7122 34.7358 22.4283 35.8586 20.8093 36.3414L21.9263 40.2093C24.6591 39.3945 26.8057 37.4818 28.0365 34.9353L24.4741 33.1594Z"
                  fill="white"
                  mask="url(#path-4-inside-2_308_277)"
                />
                <mask id="path-6-inside-3_308_277" fill="white">
                  <path d="M23.5171 16.5724L23.5198 17.0352C23.7481 22.6588 28.3289 27.1171 33.6964 27.0636C34.6555 27.0522 35.5533 26.7398 36.1951 26.0954C36.2895 26.0479 36.3631 25.9717 36.3984 25.8722C37.0044 25.1488 37.2895 24.2741 37.2529 23.3037L37.2502 22.8409C37.0398 20.2584 35.8545 17.854 34.1198 16.0661C32.2541 14.1433 29.7419 12.9341 27.0412 12.8448C26.0328 12.8569 25.0913 13.2008 24.4449 13.9145C23.7985 14.6282 23.4462 15.5794 23.5171 16.5724ZM33.7238 26.1718C28.8768 26.2362 24.7211 22.1503 24.4959 17.0556L24.4604 16.559C24.4251 15.8338 24.6273 15.1738 25.0944 14.6649C28.0594 14.8863 29.731 16.7589 29.7181 19.9407C29.7374 23.2122 31.4775 25.332 34.6217 25.975C34.3357 26.084 34.0329 26.1497 33.7238 26.1718ZM36.3396 22.888L36.3423 23.3507C36.3767 24.0582 36.1854 24.7037 35.7426 25.2072C32.3627 24.9011 30.6478 23.1211 30.6292 19.9596C30.6179 18.0423 30.0556 16.4771 29.0082 15.3976C28.305 14.6729 27.3861 14.1641 26.2638 13.9078C26.5268 13.8325 26.8029 13.7983 27.0795 13.804C31.7974 13.9354 35.9531 18.0213 36.3396 22.888Z" />
                </mask>
                <path
                  d="M23.5171 16.5724L23.5198 17.0352C23.7481 22.6588 28.3289 27.1171 33.6964 27.0636C34.6555 27.0522 35.5533 26.7398 36.1951 26.0954C36.2895 26.0479 36.3631 25.9717 36.3984 25.8722C37.0044 25.1488 37.2895 24.2741 37.2529 23.3037L37.2502 22.8409C37.0398 20.2584 35.8545 17.854 34.1198 16.0661C32.2541 14.1433 29.7419 12.9341 27.0412 12.8448C26.0328 12.8569 25.0913 13.2008 24.4449 13.9145C23.7985 14.6282 23.4462 15.5794 23.5171 16.5724ZM33.7238 26.1718C28.8768 26.2362 24.7211 22.1503 24.4959 17.0556L24.4604 16.559C24.4251 15.8338 24.6273 15.1738 25.0944 14.6649C28.0594 14.8863 29.731 16.7589 29.7181 19.9407C29.7374 23.2122 31.4775 25.332 34.6217 25.975C34.3357 26.084 34.0329 26.1497 33.7238 26.1718ZM36.3396 22.888L36.3423 23.3507C36.3767 24.0582 36.1854 24.7037 35.7426 25.2072C32.3627 24.9011 30.6478 23.1211 30.6292 19.9596C30.6179 18.0423 30.0556 16.4771 29.0082 15.3976C28.305 14.6729 27.3861 14.1641 26.2638 13.9078C26.5268 13.8325 26.8029 13.7983 27.0795 13.804C31.7974 13.9354 35.9531 18.0213 36.3396 22.888Z"
                  fill="black"
                />
                <path
                  d="M23.5171 16.5724L25.5014 16.5599L25.501 16.4929L25.4962 16.4261L23.5171 16.5724ZM23.5198 17.0352L21.5356 17.0477L21.5358 17.0832L21.5372 17.1187L23.5198 17.0352ZM33.6964 27.0636L33.7155 29.0791L33.7192 29.0791L33.6964 27.0636ZM36.1951 26.0954L35.3134 24.29L35.0274 24.4341L34.8003 24.6621L36.1951 26.0954ZM36.3984 25.8722L34.8873 24.5662L34.6536 24.8451L34.5315 25.1897L36.3984 25.8722ZM37.2529 23.3037L35.2687 23.3162L35.2689 23.3486L35.2701 23.3811L37.2529 23.3037ZM37.2502 22.8409L39.2345 22.8284L39.234 22.7512L39.2278 22.6742L37.2502 22.8409ZM27.0412 12.8448L27.1062 10.8303L27.0623 10.8289L27.0183 10.8294L27.0412 12.8448ZM24.4449 13.9145L22.9848 12.5499L22.9847 12.55L24.4449 13.9145ZM33.7238 26.1718L33.7492 28.1873L33.8062 28.1865L33.8629 28.1824L33.7238 26.1718ZM24.4959 17.0556L26.4782 16.9647L26.477 16.9369L26.475 16.9092L24.4959 17.0556ZM24.4604 16.559L22.4786 16.659L22.4797 16.6822L22.4814 16.7054L24.4604 16.559ZM25.0944 14.6649L25.2402 12.6548L24.2917 12.584L23.6431 13.2907L25.0944 14.6649ZM29.7181 19.9407L27.7338 19.9328L27.7338 19.943L27.7339 19.9532L29.7181 19.9407ZM34.6217 25.975L35.3184 27.8621L41.8077 25.3886L35.0138 23.9991L34.6217 25.975ZM36.3396 22.888L38.3238 22.8755L38.3234 22.8003L38.3175 22.7255L36.3396 22.888ZM36.3423 23.3507L34.3581 23.3632L34.3583 23.407L34.3604 23.4506L36.3423 23.3507ZM35.7426 25.2072L35.5659 27.2149L36.5584 27.3048L37.2223 26.5498L35.7426 25.2072ZM30.6292 19.9596L28.6449 19.9721L28.6449 19.9721L30.6292 19.9596ZM26.2638 13.9078L25.7254 11.968L25.8281 15.8743L26.2638 13.9078ZM27.0795 13.804L27.1343 11.7892L27.1206 11.7889L27.0795 13.804ZM21.5328 16.5849L21.5356 17.0477L25.5041 17.0227L25.5014 16.5599L21.5328 16.5849ZM21.5372 17.1187C21.8083 23.798 27.2456 29.1436 33.7155 29.0791L33.6774 25.0481C29.4123 25.0906 25.6878 21.5195 25.5024 16.9517L21.5372 17.1187ZM33.7192 29.0791C35.072 29.063 36.5046 28.6184 37.5899 27.5288L34.8003 24.6621C34.602 24.8612 34.239 25.0414 33.6737 25.0482L33.7192 29.0791ZM37.0768 27.9009C37.5603 27.6572 38.0319 27.2131 38.2653 26.5547L34.5315 25.1897C34.6943 24.7303 35.0186 24.4385 35.3134 24.29L37.0768 27.9009ZM37.9095 27.1782C38.8544 26.0502 39.2903 24.6749 39.2358 23.2262L35.2701 23.3811C35.2886 23.8732 35.1543 24.2474 34.8873 24.5662L37.9095 27.1782ZM39.2372 23.2912L39.2345 22.8284L35.266 22.8534L35.2687 23.3162L39.2372 23.2912ZM39.2278 22.6742C38.9756 19.5789 37.5634 16.7435 35.5332 14.6511L32.7063 17.4811C34.1456 18.9645 35.1041 20.938 35.2727 23.0076L39.2278 22.6742ZM35.5332 14.6511C33.3393 12.39 30.3553 10.9377 27.1062 10.8303L26.9762 14.8593C29.1286 14.9305 31.1688 15.8965 32.7063 17.4811L35.5332 14.6511ZM27.0183 10.8294C25.5981 10.8463 24.0841 11.3363 22.9848 12.5499L25.9049 15.2791C26.0985 15.0654 26.4674 14.8674 27.0641 14.8603L27.0183 10.8294ZM22.9847 12.55C21.9875 13.6511 21.4254 15.1419 21.538 16.7187L25.4962 16.4261C25.467 16.0169 25.6094 15.6053 25.905 15.279L22.9847 12.55ZM33.6983 24.1564C29.9747 24.2059 26.6577 21.0265 26.4782 16.9647L22.5136 17.1464C22.7844 23.2742 27.7788 28.2665 33.7492 28.1873L33.6983 24.1564ZM26.475 16.9092L26.4395 16.4127L22.4814 16.7054L22.5168 17.2019L26.475 16.9092ZM26.4423 16.4591C26.4292 16.1889 26.5 16.0889 26.5456 16.0392L23.6431 13.2907C22.7546 14.2587 22.4211 15.4787 22.4786 16.659L26.4423 16.4591ZM24.9485 16.6751C26.0457 16.757 26.6762 17.1191 27.0439 17.5367C27.4196 17.9632 27.7389 18.6956 27.7338 19.9328L31.7024 19.9485C31.7103 18.0039 31.2002 16.2091 30.002 14.8486C28.7958 13.479 27.108 12.7942 25.2402 12.6548L24.9485 16.6751ZM27.7339 19.9532C27.7456 21.9552 28.2905 23.7821 29.4693 25.2288C30.6471 26.6744 32.3092 27.5582 34.2296 27.951L35.0138 23.9991C33.79 23.7488 33.01 23.2512 32.5268 22.6582C32.0446 22.0664 31.7098 21.1976 31.7024 19.9282L27.7339 19.9532ZM33.9249 24.0879C33.8247 24.1261 33.7103 24.1522 33.5846 24.1612L33.8629 28.1824C34.3555 28.1471 34.8466 28.0419 35.3184 27.8621L33.9249 24.0879ZM34.3553 22.9005L34.3581 23.3632L38.3266 23.3382L38.3238 22.8755L34.3553 22.9005ZM34.3604 23.4506C34.3734 23.7166 34.3046 23.8172 34.2629 23.8647L37.2223 26.5498C38.0662 25.5902 38.3801 24.3999 38.3242 23.2509L34.3604 23.4506ZM35.9193 23.1996C34.5188 23.0727 33.7543 22.6667 33.3378 22.2381C32.942 21.8308 32.6205 21.1562 32.6134 19.9471L28.6449 19.9721C28.6564 21.9245 29.2017 23.7207 30.513 25.0702C31.8036 26.3985 33.5865 27.0356 35.5659 27.2149L35.9193 23.1996ZM32.6134 19.9471C32.5999 17.6415 31.9167 15.5235 30.4217 13.9826L27.5948 16.8126C28.1946 17.4307 28.6359 18.4431 28.6449 19.9721L32.6134 19.9471ZM30.4217 13.9826C29.4249 12.9553 28.1544 12.2736 26.6995 11.9413L25.8281 15.8743C26.6178 16.0547 27.1852 16.3905 27.5948 16.8126L30.4217 13.9826ZM26.8022 15.8477C26.8679 15.8289 26.9481 15.8173 27.0383 15.8192L27.1206 11.7889C26.6576 11.7792 26.1857 11.8361 25.7254 11.968L26.8022 15.8477ZM27.0246 15.8189C30.6965 15.9211 34.054 19.1752 34.3617 23.0505L38.3175 22.7255C37.8522 16.8674 32.8984 11.9497 27.1343 11.7892L27.0246 15.8189Z"
                  fill="white"
                  mask="url(#path-6-inside-3_308_277)"
                />
                <path
                  d="M31.3884 21.294C30.7291 17.9127 28.441 15.6102 30.9504 15.39C33.4597 15.1698 35.0595 18.2547 35.5306 19.1633C36.0018 20.0719 37.1125 24.4789 35.9687 25.0673C34.8249 25.6557 32.0478 24.6752 31.3884 21.294Z"
                  fill="#57111C"
                />
                <path
                  d="M31.3884 21.294C30.7291 17.9127 28.441 15.6102 30.9504 15.39C33.4597 15.1698 35.0595 18.2547 35.5306 19.1633C36.0018 20.0719 37.1125 24.4789 35.9687 25.0673C34.8249 25.6557 32.0478 24.6752 31.3884 21.294Z"
                  fill="#57111C"
                />
                <path
                  d="M21.3326 32.7881C24.2979 31.2362 25.7218 28.394 26.7413 30.7708C27.7607 33.1476 25.3785 35.5325 24.6769 36.2349C23.9753 36.9373 20.1918 39.204 19.2683 38.2522C18.3448 37.3004 18.3673 34.34 21.3326 32.7881Z"
                  fill="#57111C"
                />
                <path
                  d="M21.3326 32.7881C24.2979 31.2362 25.7218 28.394 26.7413 30.7708C27.7607 33.1476 25.3785 35.5325 24.6769 36.2349C23.9753 36.9373 20.1918 39.204 19.2683 38.2522C18.3448 37.3004 18.3673 34.34 21.3326 32.7881Z"
                  fill="#57111C"
                />
              </svg>

              <div className="about-row__column-left d-flex flex-column">
                <div className="h100p about-row__block-beans">
                  <div className="about-row__title">
                    {t("about_products.grain_coffee")}
                  </div>
                  <p className="about-row__text mb-20">
                    <span className="about__text-accent">Orientalcaffe</span> –{" "}
                    {t("about_products.this_is_traditional")}
                  </p>
                  <p className="about-row__text mobile paragraph">
                    {t("about_products.among_the_principles")}
                  </p>
                  <p
                    className="about-row__text mobile"
                    style={{ fontStyle: "italic" }}
                  >
                    {t("about_products.choose_the_coffee")}
                  </p>
                </div>

                <Button
                  sx={coffeGrani.sx}
                  link={coffeGrani.urlButton}
                  text={t(coffeGrani.button)}
                />
              </div>

              <img className="about-row__img--big" src={grani} alt="coffe" />
            </div>

            <div className="about-products__row center d-flex">
              <div className="about-row__column-inner column-right">
                <div className="about-row__column about-row ground-coffe d-flex justify-between align-start">
                  <img
                    className="about-products__label"
                    src={aboutGround}
                    alt="mobileground"
                  />

                  <div className="about-row__headline">
                    <div className="about-row__inner d-flex mb-10">
                      <div className="about-row__title mr-20 mb-0">
                        {t("about_products.ground_coffee")}
                      </div>

                      <div className="about-products__btn ground">
                        <Button
                          sx={coffeGround.sx}
                          link={coffeGround.urlButton}
                          text={t(coffeGround.button)}
                        />
                      </div>
                    </div>

                    <div className="d-flex">
                      <p className="about-row__text">
                        {t("about_products.many_people_represent")}
                      </p>

                      <img
                        className="about-row__img-moka"
                        src={moka}
                        alt="coffe"
                      />
                    </div>

                    <div className="about-products__btn-mobile">
                      <Button
                        sx={coffeGround.sx}
                        link={coffeGround.urlButton}
                        text={t(coffeGround.button)}
                      />
                    </div>
                  </div>
                </div>

                <div className="about-row__column about-row single-doses d-flex justify-between">
                  <img
                    className="about-products__label"
                    src={singleDoses}
                    alt="mobileground"
                  />

                  <div className="about-row__headline">
                    <div className="about-row__inner d-flex mb-10">
                      <div
                        className="about-row__title mr-20"
                        style={{ marginBottom: 0 }}
                      >
                        {t("about_products.coffee_in_single_doses")}
                        <span style={{ fontSize: "16px", display: "block" }}>
                          (38-42 мм {t("about_products.diameter")})
                        </span>
                      </div>

                      <div className="about-products__btn">
                        <Button
                          sx={coffeGround.sx}
                          link={coffeGround.urlButton}
                          text={t(coffeGround.button)}
                        />
                      </div>
                    </div>

                    <p className="about-row__text">
                      <img className="about-row__img" src={chald} alt="coffe" />
                      {t("about_products.word_chald")}
                    </p>
                  </div>

                  <div className="about-products__btn-mobile">
                    <Button
                      sx={coffeGround.sx}
                      link={coffeGround.urlButton}
                      text={t(coffeGround.button)}
                    />
                  </div>
                </div>
              </div>

              <div className="about-row__column-inner">
                <div className="about-row__column about-row column-right d-flex justify-between align-start">
                  <img
                    className="about-products__label"
                    src={nespresso}
                    alt="mobileground"
                  />

                  <div className="about-row__headline d-flex flex-column justify-between h100p">
                    <div>
                      <div className="about-row__title">
                        {t("about_products.coffee_nespresso")}
                      </div>

                      <img
                        className="column-right__img mb-10"
                        src={capsule}
                        alt="coffe"
                      />

                      <p className="about-row__text mb-20">
                        {t("about_products.coffee_nespresso_this")}
                      </p>
                    </div>

                    <Button
                      sx={coffeNespresso.sx}
                      link={coffeNespresso.urlButton}
                      text={t(coffeNespresso.button)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="about-products__row about-row p-20 d-flex align-start justify-between">
              <img
                className="about-products__label"
                src={greenCoffeGround}
                alt="mobileground"
              />

              <div className="about-row__column-left">
                <div className="about-row__title">
                  {t("about_products.coffee_green")}
                </div>

                <p className="about-row__text mb-20">
                  {t("about_products.june")}
                </p>

                <Button
                  sx={coffeGreen.sx}
                  link={coffeGreen.urlButton}
                  text={t(coffeGreen.button)}
                />
              </div>

              <img
                className="about-row__img-green about-row__img--big"
                src={green}
                alt="coffe"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
