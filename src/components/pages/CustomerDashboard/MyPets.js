import React, { useContext } from 'react';
import { PetsContext } from '../../../state/contexts/PetsContext';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
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
          {pet[1] ? (
            <div
              className="pets-img"
              style={{ backgroundImage: `url(${pet[1]})` }}
            />
          ) : (
            <div className="pet-avatar">
              <Avatar size={100} icon={<UserOutlined />} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
