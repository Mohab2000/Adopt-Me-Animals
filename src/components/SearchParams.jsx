import { useEffect, useState } from 'react';
import Pet from './Pet';
const animals = ['bird', 'cat', 'dog', 'rabbit', 'reptiles'];
const breeds = [];
const SearchParams = () => {
  const [location, setLocation] = useState('');
  const [animal, setAnimal] = useState('');
  const [breed, setBreed] = useState('');
  const [pets, setPets] = useState([]);
  useEffect(() => {
    const fetchPets = async () => {
      const res = await fetch(
        `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`,
      );
      const json = await res.json();
      setPets(json.pets);
    };
    fetchPets();
  }, [animal, location, breed]);
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
          >
            {animals.map((animal) => (
              <option value={animal} key={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            disabled={!breeds.length}
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          >
            {breeds.map((breed) => (
              <option value={breed} key={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <div className="search">
        {!pets.length ? (
          <h1>No Pets Found</h1>
        ) : (
          pets.map((pet) => (
            <Pet
              key={pet.id}
              animal={pet.animal}
              name={pet.name}
              breed={pet.breed}
            />
          ))
        )}
      </div>
    </div>
  );
};
export default SearchParams;
