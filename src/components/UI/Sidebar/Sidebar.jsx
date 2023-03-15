import './Sidebar.css';
import { Link } from 'react-router-dom';

import homeIcon from '../../../assets/icons/icon-home-light.svg';
import eventsIcon from '../../../assets/icons/icon-events-light.svg';
import concertsIcon from '../../../assets/icons/icon-concerts-light.svg';
import transportIcon from '../../../assets/icons/icon-transport-light.svg';
import sportIcon from '../../../assets/icons/icon-sport-light.svg';
import flightsIcon from '../../../assets/icons/icon-flights-light.svg';

const Sidebar = (props) => {
  return (
    <nav>
      <Link to="/">
        <div className="active">
          <img src={homeIcon} alt="" />
          <h3>Home</h3>
        </div>
      </Link>
      <Link to="/events">
        <div>
          <img src={eventsIcon} alt="" />
          <h3>Events</h3>
        </div>
      </Link>
      <Link to="/concerts">
        <div>
          <img src={concertsIcon} alt="" />
          <h3>Concerts</h3>
        </div>
      </Link>
      <Link to="/transport">
        <div>
          <img src={transportIcon} alt="" />
          <h3>Transport</h3>
        </div>
      </Link>
      <Link to="/sport">
        <div>
          <img src={sportIcon} alt="" />
          <h3>Sport</h3>
        </div>
      </Link>
      <Link to="/flights">
        <div>
          <img src={flightsIcon} alt="" />
          <h3>Flights</h3>
        </div>
      </Link>
    </nav>
  );
};
export default Sidebar;
