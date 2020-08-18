import React from 'react';
import { useSelector } from 'react-redux';

import { valutesModifyed } from '../../../selectors';
import Valute from '../../molecular/Valute';

import { ValutesWrapper } from './styled';

function Valutes() {
  const valutes = useSelector((state) => valutesModifyed(state));

  return (
    <ValutesWrapper>
      {valutes.map((item) => (
        <Valute linkTo valute={item} key={item.id} />
      ))}
    </ValutesWrapper>
  );
}

export default Valutes;
