export const getCurrentTime = (): string => {
  const now = new Date();
  return now.toLocaleTimeString('en-GB', { hour12: false });
};

export const one = 1;
export const hundred = 100;
