import './Home.css';
import Slider from '../../components/UI/Slider/Slider';
import Featured from '../../components/UI/Featured/Featured';

const Home = (props) => {
  const popular = () => {
    return props.events.filter((event) => event.popular);
  };

  const today = () => {
    return props.events.filter((event) => event.today);
  };

  return (
    <>
      <Featured />
      <Slider title="Popular Events" events={popular()}></Slider>
      <div className="separator"></div>
      <Slider title="Today" events={today()}></Slider>
    </>
  );
};
export default Home;
