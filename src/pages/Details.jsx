import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pet, setPet] = useState(null);

  //Call API
  const fetchPet = async () => {
    const res = await fetch(`https://pets-v2.dev-apis.com/pets?id=${id}`);
    const json = await res.json();
    console.log(json);
    const currentPet = json.pets[0];
    setPet(currentPet);
  };
  useEffect(() => {
    fetchPet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <div className="details">
      {!pet && <h4>Loading</h4>}
      {pet && (
        <div>
          <h1>{pet.name}</h1>
          <h2>{`${pet.animal} - ${pet.breed} - ${pet.city} , ${pet.state}`}</h2>
          <p>{pet.description}</p>
          <button
            onClick={() => {
              navigate('/');
            }}
          >
            Back
          </button>{' '}
        </div>
      )}
    </div>
  );
};
export default Details;
