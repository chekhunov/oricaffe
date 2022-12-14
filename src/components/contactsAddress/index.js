import React from 'react';

export default function ContactsAddress() {

  return (
     <address className={"contacts__list"}>
                                <div className={"contacts__item"}>
                                    <span className="icon-location"></span>

                                    <div className={"contacts__block"}>
                                        
                                        <a className={"contacts__title"} href="https://www.google.com/maps/place/%D0%B2%D1%8A%D0%B5%D0%B7%D0%B4+%D0%91%D0%B0%D0%BB%D0%B0%D0%BA%D0%B8%D1%80%D0%B5%D0%B2%D0%B0,+1,+%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2,+%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+61000/@50.039936,36.2426616,17z/data=!3m1!4b1!4m5!3m4!1s0x4127a6c68400393f:0x9c9af1ee91cf5108!8m2!3d50.039936!4d36.2448503" target="_blanck">
                                            Харьков, въезд Балакирева 1
                                        </a>
                                        
                                        <div className={"contacts__text"}>
                                        Институт общей и неотложной хирургии им. В.Т. Зайцева НАМН Украины, Кафедра онкологии и детской онкологии ХМАПО
                                        </div>
                                    </div>
                                </div>

                                <div className={"contacts__item"}>
                                    <span className="icon-phone"></span>

                                    <div className={"contacts__block"}>
                                        <a className={"contacts__title"} href="tel:+380507732235">
                                        +38 050 773 22 35
                                        </a>

                                        <div className={"contacts__text"}>
                                        По всем вопросам. С 9:00 до 19:00 
                                        </div>
                                    </div>
                                </div>

                                <div className={"contacts__item"}>
                                    <span className="icon-mail"></span>

                                    <div className={"contacts__block"}>
                                        <a className={"contacts__title"} href="mailto:trials.kh@gmail.com">
                                            trials.kh@gmail.com
                                        </a>

                                        <div className={"contacts__text"}>
                                            Наша электронная почта
                                        </div>
                                    </div>
                                </div>
    </address>
  );
}
