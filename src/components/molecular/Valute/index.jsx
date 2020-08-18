import React from 'react';
import { Link } from 'react-router-dom';

import { ValuteWrapper, ValuteItem } from './styled';

function Valute({ valute }) {
  const { id, name, marketCap, price, volume, change } = valute;
  return (
    <ValuteWrapper>
      <Link to={{ pathname: `/currency/${name}`, state: { id } }}>
        <ValuteItem>{name}</ValuteItem>
      </Link>
      <ValuteItem>{marketCap}</ValuteItem>
      <ValuteItem>{price}</ValuteItem>
      <ValuteItem>{volume}</ValuteItem>
      <ValuteItem>{change}</ValuteItem>
    </ValuteWrapper>
  );
}

export default Valute;
