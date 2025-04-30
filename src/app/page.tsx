'use client';

import * as React from 'react';
import GameControls from './modules/GameControls';
import { StyledMainContainer } from './gameStyles';

const Home = () => {
  return (
    <StyledMainContainer maxWidth='sm'>
      <GameControls />
    </StyledMainContainer>
  );
};

export default Home;
