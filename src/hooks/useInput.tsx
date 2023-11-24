import { useState } from 'react';

type Props = {
  validateValue: (value: string) => boolean;
};

export const useInput = ({ validateValue }: Props) => {
  const [value, setValue] = useState('');
  const [valueWasTouched, setValueWasTouched] = useState(false);

  const isValid = validateValue(value);
  const hasError = !isValid && valueWasTouched;

  const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const valueBlurHandler = () => {
    setValueWasTouched(true);
  };

  return {
    value,
    hasError,
    valueBlurHandler,
    valueChangeHandler,
  };
};
