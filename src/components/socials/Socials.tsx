import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import './socials.scss';
const Socials = () => (
  <div className="socials">
    <a href="https://www.facebook.com/LetodianiRoma">
      <FaFacebookF />
    </a>
    <a href="https://twitter.com/l3todianiroma">
      <FaTwitter />
    </a>
    <a href="https://www.instagram.com/roma.letodiani/">
      <FaInstagram />
    </a>
  </div>
);

export default Socials;
