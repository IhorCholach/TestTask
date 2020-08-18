import { createSelector } from 'reselect';
import { round } from 'lodash';

const valutes = (state) => state.valutes.valutes || [];
const id = (state) => state.singleValute.id;

const formatterChangeValute = (precent) => {
  let newPrecent = round(precent, 2).toString().replace('.', ',');
  let index = newPrecent.indexOf(',');

  if (newPrecent.substr(index).length - 1 === 1) {
    return newPrecent + '0%';
  } else if (newPrecent.substr(index).length - 1 === 0) {
    return newPrecent + ',00%';
  }
  return newPrecent + '%';
};

const formatterMarketCapVolume = (count) => {
  let newCount = round(count)
    .toString()
    .replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');
  return '$' + newCount;
};

const formatterPrice = (price) => {
  let newPrice = round(price, 6).toString().replace('.', ',');
  return '$' + newPrice;
};

const formatterSupply = (supply, symbol) => {
  if (!supply) return '';
  let newSupply = round(supply).toString().replace('.', ',');
  return newSupply + ` ${symbol}`;
};

export const valutesModifyed = createSelector(valutes, (items) =>
  items.reduce((acc, cur) => {
    let newItem = {
      id: cur.id,
      name: cur.name,
      marketCap: formatterMarketCapVolume(cur.quote.USD.market_cap),
      price: formatterPrice(cur.quote.USD.price),
      volume: formatterMarketCapVolume(cur.quote.USD.volume_24h),
      change: formatterChangeValute(cur.quote.USD.percent_change_24h),
    };
    return [...acc, newItem];
  }, [])
);

export const singleValuteModifyed = createSelector([valutes, id], (items, id) =>
  items
    .filter((item) => item.id === id)
    .reduce((acc, cur) => {
      cur = {
        name: cur.name,
        symbol: cur.symbol,
        slug: cur.slug,
        numMarketPairs: cur.num_market_pairs,
        dateAdded: cur.date_added,
        maxSupply: formatterSupply(cur.max_supply),
        circulatingSupply: formatterSupply(cur.circulating_supply, cur.symbol),
        totalSupply: formatterSupply(cur.total_supply, cur.symbol),
        cmcRank: cur.cmc_rank,
        lastUpdated: cur.last_updated,
        price: formatterPrice(cur.quote.USD.price),
        volume24h: formatterMarketCapVolume(cur.quote.USD.volume_24h),
        precentChange1h: formatterChangeValute(cur.quote.USD.percent_change_1h),
        precentChange24h: formatterChangeValute(
          cur.quote.USD.percent_change_24h
        ),
        precentChange7d: formatterChangeValute(cur.quote.USD.percent_change_7d),
        marketCap: formatterMarketCapVolume(cur.quote.USD.market_cap),
      };
      return { ...acc, ...cur };
    }, {})
);
