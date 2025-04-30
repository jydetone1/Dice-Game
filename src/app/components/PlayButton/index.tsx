'use client';

import { FC, memo } from 'react';
import { StyledButtonWrapper } from '../../gameStyles';
import { text } from '../../utils/text';

interface IGameButton {
  onPlay: () => void;
}

const PlayButton: FC<IGameButton> = ({ onPlay }) => {
  return (
    <StyledButtonWrapper
      variant='contained'
      color='secondary'
      type='button'
      onClick={onPlay}
    >
      {text.play}
    </StyledButtonWrapper>
  );
};

export default memo(PlayButton);
