import './Header.css';
import logo from '../../../../public/assets/logo.svg';

import Search from '../Search/Search';
import Button from '../../Base/Button/Button';

const Header = (props) => {
  return (
    <header>
      <img src={logo} alt="" />
      <div className="header-actions">
        <Search />
        <Button>Log in</Button>
        <Button className="light">Sign Up</Button>
      </div>
    </header>
  );
};

export default Header;
