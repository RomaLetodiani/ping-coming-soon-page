import './input.scss';

type Props = {
  placeholder: string;
  error: boolean;
};

const Input = ({ placeholder, error }: Props) => {
  return (
    <div className="input-wrapper">
      <input placeholder={placeholder} />
      {error && (
        <p className="error-message">Please provide a valid email address</p>
      )}
    </div>
  );
};

export default Input;
