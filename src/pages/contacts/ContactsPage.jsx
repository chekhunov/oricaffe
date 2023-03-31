import React, { useState } from "react";

import cn from "classnames";
import { useTranslation } from "react-i18next";
import { Divider } from "@material-ui/core";
import ContainerPage from "../../components/modules/containerPage";
import ContactsAddress from "../../components/contactsAddress";
import map from "../../assets/img/contacts/mapBeregovo.jpg";
import mapPartners from "../../assets/img/contacts/mapPartners.png";

import "./ContactsPage.scss";

const listPartners = [
  {
    id: 0,
    title: "Крафт",
    address: "Ужгород, площа Шандора Петефі 28",
    link: "https://www.facebook.com/Crafts.Zakarpattia",
  },
  {
    id: 1,
    title: "Кава у джанні",
    address: "Закарпатська область, Ужгород, вулиця Мукачівська, 4",
    link: "https://www.facebook.com/kavaugianni/",
  },
  {
    id: 2,
    title: "Колиба",
    address: "Ужгород, вул.Цегольнянська, 4",
    link: "https://www.facebook.com/kolubauzhgorod/",
  },
  {
    id: 3,
    title: "Чорна сіль",
    address: "Ужгород, Духновича, 2",
    link: "https://www.facebook.com/chornasi/",
  },
  {
    id: 4,
    title: "Lets Coffe",
    address: "Ужгород, вулиця Фединця, 6",
    link: "https://www.instagram.com/letscoffeeuzh/",
  },
  {
    id: 5,
    title: "Полонинский хліб",
    address: "Ужгород, Проспект Свободи 40",
    link: "https://www.facebook.com/polonynskiy.bakery/",
  },
  {
    id: 6,
    title: "Полонинский хліб",
    address: "Ужгород, Корятовича, 22",
    link: "https://www.facebook.com/polonynskiy.bakery/",
  },
  {
    id: 7,
    title: "Полонинский хліб",
    address: "Ужгород, Комендаря, 78в",
    link: "https://www.facebook.com/polonynskiy.bakery/",
  },
  {
    id: 8,
    title: "Полонинский хліб",
    address: "Ужгород, площа Корятовича, 4",
    link: "https://www.facebook.com/polonynskiy.bakery/",
  },
  {
    id: 9,
    title: "Полонинский хліб",
    address: "Ужгород, площа Шандора Петефі, 46",
    link: "https://www.facebook.com/polonynskiy.bakery/",
  },
  {
    id: 10,
    title: "Полонинский хліб",
    address: "Ужгород, Проспект, 3",
    link: "https://www.facebook.com/polonynskiy.bakery/",
  },
  {
    id: 11,
    title: "Полонинский хліб",
    address: "Ужгород, Заньковецької, 75",
    link: "https://www.facebook.com/polonynskiy.bakery/",
  },
  {
    id: 12,
    title: "Полонинский хліб",
    address: "Ужгород, вулиця Патруса Карпатського, 25г",
    link: "https://www.facebook.com/polonynskiy.bakery/",
  },
  {
    id: 13,
    title: "Полонинский хліб",
    address: "Ужгород, Село Минай",
    link: "https://www.facebook.com/polonynskiy.bakery/",
  },
  {
    id: 14,
    title: "Tea Room",
    address: "Ужгород, вулиця Довженка, 2/14",
    link: "",
  },
  {
    id: 15,
    title: "Barry Bars",
    address: "Мукачево, Ярослава Мудрого, 23/4",
    link: "https://www.facebook.com/BarryBarrsPub/?locale=uk_UA",
  },
  {
    id: 16,
    title: "Solva Resort & SPA",
    address:
      "89314 Поляна, Закарпатська область, санаторій «Сонячне Закарпаття», 7",
    link: "https://solvahotel.com/",
  },
  {
    id: 17,
    title: "LU LU Coffee Bar",
    address: "Місто свалява , головна 55",
    link: "https://www.facebook.com/lulucoffeebar/",
  },
  {
    id: 18,
    title: "Restaurant&Pizzeria Don Corleone",
    address: "90234, Закарпатська область, Дийда, Спортивна",
    link: "https://www.instagram.com/doncorleone_deda/",
  },
  {
    id: 19,
    title: "Picanteria family cafe",
    address: "м. Берегово вул.сечені 19",
    link: "https://www.instagram.com/picanteriafamily/",
  },
  {
    id: 20,
    title: "Kiscsikó",
    address: "90201, Закарпатська область, м. Берегове, Kossuth tér 6",
    link: "https://www.facebook.com/kiscsikomenza/?locale=ru_RU",
  },
  {
    id: 21,
    title: "I Coffe",
    address: "Закарпатська область, м. Берегове, вул штефанька",
    link: "",
  },
  {
    id: 22,
    title: "Vyngrad resto bar",
    address: "м. Виноградів, комунальна 3а",
    link: "https://www.instagram.com/_vyngrad_resto_bar/",
  },
  {
    id: 23,
    title: "Чорна Скеля",
    address: "м. Виноградів, Чорна гора",
    link: "https://www.facebook.com/chornaskelia/?locale=ru_RU",
  },
  {
    id: 24,
    title: "Orient Express",
    address: "м. Виноградів, вул. Миру 8",
    link: "https://www.facebook.com/profile.php?id=100057124994429",
  },
  {
    id: 25,
    title: "Impresso",
    address: "м. Виноградів, вулиця Станційна, 68",
    link: "https://www.facebook.com/impresso.vynogradiv/",
  },
  {
    id: 26,
    title: "Stare Misto",
    address: "м. Виноградів, вулиця Івана Франка, 23",
    link: "https://www.instagram.com/explore/locations/542482669/vynohradiv/",
  },
  {
    id: 27,
    title: "Dart",
    address: "м. Виноградів, вулиця Миру, 6/ другий поверх",
    link: "",
  },
];

let breadcrumbs = [
  {
    id: 0,
    title: "home",
    link: "",
  },
  {
    id: 1,
    title: "contacts",
    link: "",
  },
];

const ContactPage = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(null);
  return (
    <ContainerPage name="contacts" breadcrumbs={breadcrumbs}>
      <div className="contacts-page__content">
        <ContactsAddress />

        <img className="contacts-page__image" src={map} alt="map beregovo" />
      </div>

      <Divider />

      <div className="contacts-page__row">
        <div className="contacts-page__headline">
          <div className="contacts-page__title partners-title">
            {t("our_partners")}
          </div>
          <div className="contacts-page__subtitle">{t("can_buy_goods")}</div>
        </div>

        <div className="contacts-page__partners">
          <div className="contacts-page__items">
            {listPartners?.map((item, index) => (
              <a
                href={item.link}
                className={cn(
                  "contacts-page__item",
                  index === active ? "active" : ""
                )}
                onClick={() => setActive(index)}
                target="_blank"
                rel="noreferrer"
              >
                <div className="contacts-page__caffee">{item.title}</div>
                <div className="contacts-page__address">{item.address}</div>
              </a>
            ))}
          </div>

          <img src={mapPartners} alt="map partners" />
        </div>
      </div>
    </ContainerPage>
  );
};

export default ContactPage;
