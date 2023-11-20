import Button from './UI/Button/Button';
import Input from './UI/Input/Input';

const InputDiv = () => {
  return (
    <div className="input-div">
      <Input placeholder="email" error={false} />
      <Button text="Notify Me" />
    </div>
  );
};

export default InputDiv;
