import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import actions from '../../store/actions';
import SingleValute from '../../components/organical/SingleValute';
import { singleValuteModifyed } from '../../selectors';
import { ValutesWrapper } from './styled';

function ValuteContainer(props) {
  const dispatch = useDispatch();
  const start = useSelector((state) => state.valutes.start);
  const limit = useSelector((state) => state.valutes.limit);
  const id = props.location.state.id;
  const valute = useSelector((state) => singleValuteModifyed(state));

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(actions.getValutes({ start, limit }));
    }, 30000);
    dispatch(actions.setId(id));
    return () => clearInterval(interval);
  });

  console.log(11111111);

  return (
    <ValutesWrapper>
      <SingleValute valute={valute} />
    </ValutesWrapper>
  );
}

export default ValuteContainer;
