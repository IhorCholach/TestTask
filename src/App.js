import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';

import actions from './store/actions';
import ValutesContainer from './containers/ValutesContainer';
import ValuteContainer from './containers/ValuteContainer';

function App() {
  const dispatch = useDispatch();
  const start = useSelector((state) => state.valutes.start);
  const limit = useSelector((state) => state.valutes.limit);

  useEffect(() => {
    dispatch(actions.getValutes({ start, limit }));
    // const interval = setInterval(() => {
    //   dispatch(actions.getValutes({ start }));
    // }, 30000);
    // return () => clearInterval(interval);
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/currency" component={ValutesContainer} />
        <Route path="/currency/:name" component={ValuteContainer} />
        <Redirect from="/" to="/currency" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
