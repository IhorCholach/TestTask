import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import actions from '../../store/actions';
import Header from '../../components/molecular/Header';
import Valutes from '../../components/organical/Valutes';
import Navigation from '../../components/molecular/Navigation';
import { ValutesWrapper } from './styled';

function ValutesContainer() {
  const dispatch = useDispatch();
  const start = useSelector((state) => state.valutes.start);
  const limit = useSelector((state) => state.valutes.limit);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(actions.getValutes({ start, limit }));
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ValutesWrapper>
      <Header />
      <Valutes />
      <Navigation />
    </ValutesWrapper>
  );
}

export default ValutesContainer;
