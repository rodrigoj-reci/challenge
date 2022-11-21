import axios from 'axios';
import {useEffect, useState} from 'react';
import {API_URL} from '../../utils/constants';

const useSpecies = () => {
  const [species, setSpecies] = useState({
    loading: true,
    error: null,
    data: [],
  });

  useEffect(() => {
    async function getSpecies() {
      try {
        const {
          data: {species: speciesUrls},
        } = await axios.get(API_URL);

        const speciesPromises = await Promise.all(
          speciesUrls.map(async url => {
            const {data} = await axios.get(url);
            return data;
          })
        );
        const species = Promise.all(speciesPromises);
        const speciesData = await species;
        setSpecies({
          loading: false,
          error: null,
          data: speciesData,
        });
      } catch (e) {
        setSpecies({
          loading: false,
          data: [],
          error: 'Try later',
        });
      }
    }

    getSpecies();
  }, []);

  return {species};
};

export default useSpecies;
