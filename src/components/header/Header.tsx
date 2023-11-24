import logo from '../../assets/images/logo.svg';
import InputDiv from '../InputDiv';
import './header.scss';

const Header = () => {
  return (
    <header>
      <img src={logo} alt="PING." />
      <div className="texts-div">
        <h1>
          <span>We are launching</span> soon!
        </h1>
        <h3>Subscribe and get notified</h3>
      </div>
      <InputDiv />
    </header>
  );
};

export default Header;
