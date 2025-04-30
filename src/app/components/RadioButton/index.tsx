'use client';

import { FC } from 'react';
import {
  RadioGroup,
  Radio,
  FormControl,
  FormControlLabel,
} from '@mui/material';
import { StyledRadioButtonWrapper } from '../../gameStyles';
import { useGameStore } from '../../hooks/useGameStore';
import { IPredictions } from '../../types';

const RadioButton: FC = () => {
  const { guessDirection, setGuessDirection } = useGameStore();

  return (
    <StyledRadioButtonWrapper>
      <FormControl>
        <RadioGroup
          row
          value={guessDirection}
          onChange={(e) => setGuessDirection(e.target.value as IPredictions)}
        >
          <FormControlLabel
            value='Under'
            control={
              <Radio
                sx={{
                  '&.Mui-checked': { color: 'purple' },
                }}
              />
            }
            label='Under'
            labelPlacement='start'
          />
          <FormControlLabel
            value='Over'
            control={
              <Radio
                sx={{
                  '&.Mui-checked': { color: 'purple' },
                }}
              />
            }
            label='Over'
            labelPlacement='start'
          />
        </RadioGroup>
      </FormControl>
    </StyledRadioButtonWrapper>
  );
};

export default RadioButton;
