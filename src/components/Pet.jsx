import { Link } from 'react-router-dom';
const Pet = (props) => {
  const { name, animal, breed, images, location, id } = props;
  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={images[0]} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
