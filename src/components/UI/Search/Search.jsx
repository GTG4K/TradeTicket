import './Search.css';
import iconSearch from '../../../assets/icons/icon-search.svg';

const Search = (props) => {
  return (
    <div className="search-container">
      <input type="text" placeholder="Search for tickets..." />
      <div className="icon-search">
        <img src={iconSearch} alt="search" />
      </div>
    </div>
  );
};

export default Search;
