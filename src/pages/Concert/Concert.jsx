import './Concert.css';
import something from '../../assets/icons/somethingidk.svg';
import { useParams } from 'react-router-dom';
import Button from '../../components/Base/Button/Button';

import cart from '../../assets/icons/icon-cart.svg';

const Concert = (props) => {
  const params = useParams();
  const event = props.events.find((event) => event.route === params.id);

  const eventDate = () => {
    const [weekday, time] = event.time.split(',');
    return `${weekday}, ${event.day} ${event.month} ${time}`;
  };

  return (
    <div className="concert-container">
      <img src={event.imgLarge} alt="" />
      <div className="concert-details">
        <div className="title-desc">
          <h2 className="title">{event.title}</h2>
          <h3>Description</h3>
          <p>{event.description}</p>
        </div>
        <div className="concert-action">
          <div className="concert-action-details">
            <div className="concert-date">
              <img src={something} alt="" />
              <h3 className="date">{eventDate()}</h3>
              <h3 className="location">{event.location}</h3>
            </div>
            <div className="concert-price">
              <h4>From /</h4>
              <h3>${event.price}</h3>
            </div>
          </div>
          <div className="action-buttons">
            <Button className="full">See available tickets</Button>
            <Button className="light full">Sell a ticket</Button>
            <Button className="transparent full">
              <img src={cart} alt="" /> Add to cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Concert;
