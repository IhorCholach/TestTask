import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import actions from '../../../store/actions';

import { NavigationWrapper, Button } from './styled';

function Navigation() {
  const start = useSelector((state) => state.valutes.start);
  const limit = useSelector((state) => state.valutes.limit);
  const dispatch = useDispatch();

  return (
    <NavigationWrapper>
      {start !== 1 && (
        <Button
          onClick={() =>
            dispatch(actions.getPreviousPage({ start: start - limit, limit }))
          }
        >
          Previous 20
        </Button>
      )}
      <Button
        onClick={() =>
          dispatch(actions.getNextPage({ start: start + limit, limit }))
        }
      >
        Next 20
      </Button>
    </NavigationWrapper>
  );
}

export default Navigation;
