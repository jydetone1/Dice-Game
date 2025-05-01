'use client';

import { FC, memo } from 'react';
import { StyledButtonWrapper } from '../../gameStyles';
import { text } from '../../utils/text';

interface IPlayButton {
  onPlay: () => void;
}

const PlayButton: FC<IPlayButton> = ({ onPlay }) => {
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
