import './Button.css';

const Button = (props) => {
  return <button className={`tt-button ${props.className}`}>{props.children}</button>;
};

export default Button;
