import './input.scss';

type Props = {
  placeholder: string;
  error: boolean;
  value: string;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlurHandler: (event: React.FocusEvent<HTMLInputElement>) => void;
};

const Input = ({
  value,
  placeholder,
  error,
  onChangeHandler,
  onBlurHandler,
}: Props) => {
  return (
    <div className="input-wrapper">
      <input
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        value={value}
        className={error ? 'error' : ''}
        placeholder={placeholder}
      />
      {error && (
        <p className="error-message">Please provide a valid email address</p>
      )}
    </div>
  );
};

export default Input;
