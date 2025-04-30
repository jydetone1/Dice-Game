'use client';

import { useState } from 'react';

const usePopup = () => {
  const [changingConfirmed, setChangingConfirmed] = useState<boolean>(false);
  const [notificationText, setNotificationText] = useState<string>('');

  const changeContinuePopup = (text = 'You won') => {
    setNotificationText(text);
    setChangingConfirmed(true);

    setTimeout(() => {
      setChangingConfirmed(false);
      setNotificationText('');
    }, 3000);
  };
  return { notificationText, changingConfirmed, changeContinuePopup } as const;
};

export default usePopup;
