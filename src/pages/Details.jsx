import { useParams, useNavigate } from 'react-router-dom';
const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div className="details">
      <h3>Pet {id} Details Page</h3>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        Back
      </button>
    </div>
  );
};
export default Details;
