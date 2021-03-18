import React, { useContext } from 'react';
import { PetsContext } from '../../../state/contexts/PetsContext';
import './overview.scss';

export default function MyPets() {
  const { pets } = useContext(PetsContext);
  let petNames = [];

  let i;
  for (i = 0; i < pets.length; i++) {
    petNames.push(pets[i]?.pet_name);
  }

  return (
    <div id="Pets">
      {petNames.map(pet => (
        <div key={pet}>{pet}</div>
      ))}
    </div>
  );
}
