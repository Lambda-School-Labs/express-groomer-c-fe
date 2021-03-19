import React, { useContext } from 'react';
import { PetsContext } from '../../../state/contexts/PetsContext';
import './overview.scss';

export default function MyPets() {
  const { pets } = useContext(PetsContext);
  let petNames = [];

  let i;
  for (i = 0; i < pets.length; i++) {
    petNames.push([pets[i]?.pet_name, pets[i]?.pet_image_url]);
  }

  console.log(petNames);

  return (
    <div id="Pets">
      {petNames.map(pet => (
        <div className="pet-container" key={pet}>
          <p>{pet[0]}</p>
          <div
            className="pets-img"
            style={{ backgroundImage: `url(${pet[1]})` }}
          />
        </div>
      ))}
    </div>
  );
}
