import React from 'react';
import { Link } from 'react-router-dom';

import { ValuteWrapper, ValuteAttribute, Button } from './styled';
import { values } from 'lodash';

function SingleValute({ valute }) {
  return (
    <ValuteWrapper>
      <Link to="/currency">
        <Button>Back to valutes</Button>
      </Link>
      <ValuteAttribute>Name: {valute.name}</ValuteAttribute>
      <ValuteAttribute>Sumbol: {valute.symbol}</ValuteAttribute>
      <ValuteAttribute>Slug: {valute.slug}</ValuteAttribute>
      <ValuteAttribute>Market Pairs: {valute.numMarketPairs}</ValuteAttribute>
      <ValuteAttribute>Added Date: {valute.dateAdded}</ValuteAttribute>
      <ValuteAttribute>Max Supply: {valute.maxSupply}</ValuteAttribute>
      <ValuteAttribute>
        Circulating Supply: {valute.circulatingSupply}
      </ValuteAttribute>
      <ValuteAttribute>Total Suply: {valute.totalSupply}</ValuteAttribute>
      <ValuteAttribute>CMC Rank: {valute.cmcRank}</ValuteAttribute>
      <ValuteAttribute>Last Update: {valute.lastUpdated}</ValuteAttribute>
      <ValuteAttribute>Price: {valute.price}</ValuteAttribute>
      <ValuteAttribute>Volume (24h): {valute.volume24h}</ValuteAttribute>
      <ValuteAttribute>
        Precent Change (1h):
        {valute.precentChange1h}
      </ValuteAttribute>
      <ValuteAttribute>
        Precent Change (24h):
        {valute.precentChange24h}
      </ValuteAttribute>
      <ValuteAttribute>
        Precent Change (7d):
        {valute.precentChange7d}
      </ValuteAttribute>
      <ValuteAttribute>Market Cap: {valute.marketCap}</ValuteAttribute>
    </ValuteWrapper>
  );
}

export default SingleValute;
