import React from 'react';

import './infoBlock.scss'

const InfoBlock = () => {
  return (
    <div className="info-block d-flex flex-column">
      <div className="info-block__headline">l’amore per l’aroma</div>
      <div className="info-block__block">since 1955</div>
      <div className="info-block__made">MADE IN TUSCANY</div>
    </div>
  );
}

export default InfoBlock;