import logo from '../../assets/images/logo.svg';
import InputDiv from '../InputDiv';
import './header.scss';

const Header = () => {
  return (
    <header>
      <img src={logo} alt="PING." />
      <div>
        <h1>
          We are launching <span>soon!</span>
        </h1>
        <h3>Subscribe and get notified</h3>
      </div>
      <InputDiv />
    </header>
  );
};

export default Header;
