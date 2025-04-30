'use client';

import { FC } from 'react';
import History from './History';
import GameSlider from '../../components/GameSlider';
import PlayButton from '../../components/PlayButton';
import RadioButton from '../../components/RadioButton';
import usePopup from '../../hooks/usePopup';
import {
  StyledDigitWrapper,
  StyledContainer,
  StyledDiceDigit,
  StyledDigitContainer,
} from '../../gameStyles';
import { getCurrentTime, hundred, one } from '../../utils/helper';
import Toast from '../../components/Toast';
import { useGameStore } from '../../hooks/useGameStore';
import { text } from '../../utils/text';

const GameControls: FC = () => {
  const { notificationText, changingConfirmed, changeContinuePopup } =
    usePopup();
  const { guessDirection, sliderValue, history, addHistory } = useGameStore();

  const onPlay = () => {
    if (sliderValue < one || sliderValue > hundred) return;
    const actualResult = Math.floor(Math.random() * hundred) + one;
    const isSuccess =
      (guessDirection === 'Over' && actualResult > sliderValue) ||
      (guessDirection === 'Under' && actualResult < sliderValue);

    const newEntry = {
      time: getCurrentTime(),
      guess: `${guessDirection.toLowerCase()} ${sliderValue}`,
      result: actualResult,
      success: isSuccess,
    };

    addHistory(newEntry);

    if (isSuccess) {
      changeContinuePopup(text.youWon);
    } else {
      const directionFail =
        actualResult > sliderValue ? text.lower : text.higher;
      changeContinuePopup(`${text.youLost} ${directionFail}.`);
    }
  };

  return (
    <StyledContainer>
      {changingConfirmed && (
        <Toast
          notificationText={notificationText}
          warning={notificationText.toLowerCase().includes('lost')}
        />
      )}
      <StyledDigitContainer>
        <StyledDigitWrapper>
          <StyledDiceDigit>{sliderValue}</StyledDiceDigit>
        </StyledDigitWrapper>
        <RadioButton />
        <GameSlider />
        <PlayButton onPlay={onPlay} />
      </StyledDigitContainer>
      <History history={history} />
    </StyledContainer>
  );
};

export default GameControls;
