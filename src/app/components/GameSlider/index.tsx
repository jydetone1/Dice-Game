'use client';

import { FC } from 'react';
import { Slider } from '@mui/material';
import { useGameStore } from '../../hooks/useGameStore';
import { StyledSliderRangeWrapper } from '../../gameStyles';
import { hundred, one } from '../../utils/helper';

const GameSlider: FC = () => {
  const { sliderValue, setSliderValue } = useGameStore();

  return (
    <StyledSliderRangeWrapper>
      <Slider
        value={sliderValue}
        onChange={(_, value) => setSliderValue(value as number)}
        valueLabelDisplay='auto'
        step={1}
        min={1}
        max={100}
        color='secondary'
        marks={[
          { value: one, label: '1' },
          { value: hundred, label: '100' },
        ]}
      />
    </StyledSliderRangeWrapper>
  );
};

export default GameSlider;
