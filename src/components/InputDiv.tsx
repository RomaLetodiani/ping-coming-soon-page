import { useInput } from '../hooks/useInput';
import Button from './UI/Button/Button';
import Input from './UI/Input/Input';
import './input-div.scss';

const InputDiv = () => {
  const {
    value: email,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
  } = useInput({ validateValue: (value) => value.includes('@') });
  return (
    <div className="input-div">
      <Input
        value={email}
        onChangeHandler={emailChangeHandler}
        onBlurHandler={emailBlurHandler}
        placeholder="Your email address"
        error={emailHasError}
      />
      <Button text="Notify Me" />
    </div>
  );
};

export default InputDiv;
