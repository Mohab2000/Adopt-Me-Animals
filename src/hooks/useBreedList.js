import { useEffect, useState } from 'react';

const localCache = {};
const useBreedList = (animal) => {
  const [breedList, setBreedList] = useState([]);
  useEffect(() => {
    const fetchBreedList = async () => {
      const res = await fetch(
        `https://pets-v2.dev-apis.com/breeds?animal=${animal}`,
      );
      const json = await res.json();
      localCache[animal] = json.breeds || [];
      setBreedList(localCache[animal]);
    };
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      fetchBreedList();
    }
  }, [animal]);
  return breedList;
};

export default useBreedList;
