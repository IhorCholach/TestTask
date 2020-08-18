import React from 'react';

import { HeaderWrapper, HeaderItem } from './styled';

const headerElements = [
  'Name',
  'Market Rank',
  'Price',
  'Volume (24h)',
  'Change (24h)',
];

function Header() {
  return (
    <HeaderWrapper>
      {headerElements.map((item) => (
        <HeaderItem key={item}>{item}</HeaderItem>
      ))}
    </HeaderWrapper>
  );
}

export default Header;
