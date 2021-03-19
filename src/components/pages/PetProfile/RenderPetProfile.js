import React, { useContext } from 'react';
import { ProfileFormPO } from '../ProfileFormPO';
import { Layout, Divider } from 'antd';
import VaccineImage from './VaccineImage';
import PetImageModal from './PetProfileImage';
import 'antd/dist/antd.css';
import './pet.scss';
// context imports
import { FormContext } from '../../../state/contexts/FormContext';
import { PetsContext } from '../../../state/contexts/PetsContext';

const RenderPetProfile = () => {
  const { showForm } = useContext(FormContext);
  const { pets } = useContext(PetsContext);

  return (
    <div>
      {pets.map(pet => (
        <div key={pet.id}>
          {showForm ? <ProfileFormPO /> : null}
          <Layout.Content
            style={{
              background: 'white',
              width: '75%',
              margin: '20px auto',
              padding: '10px',
              borderRadius: '1rem 1rem 0 0',
            }}
          >
            {/* <div className="avatar">
              <Avatar size={74} icon={<UserOutlined />} />
            </div> */}

            <div className="pet-header">
              <p className="heading">{pet.pet_name}</p>
              <PetImageModal />
            </div>
            <div className="pet-info-box">
              <div className="panel">
                <Divider style={{ borderColor: 'lightblue' }}>Pet Info</Divider>
                <div className="panel-info">
                  <p>{`Breed: ${pet.pet_breed}`}</p>
                  <p>{`Gender: ${pet.pet_gender}`}</p>
                  <p>{`Color: ${pet.pet_color}`}</p>
                  <p>{`Temperament: ${pet.pet_temperament}`}</p>
                </div>
              </div>
              <div className="panel">
                <Divider style={{ borderColor: 'lightblue' }}>
                  Clinical Info
                </Divider>
                <div className="panel-info">
                  <p>{`Spayed / Neutered: ${
                    pet.spay_neuter ? 'Yes' : 'No'
                  }`}</p>
                  <p>{`Current on vaccines: ${
                    pet.shots_current ? 'Yes' : 'No'
                  }`}</p>
                  <p>{`Special requests for groomer: ${
                    pet.special_requests ? pet.special_requests : 'None'
                  }`}</p>
                </div>
              </div>
            </div>
            <VaccineImage pet={pet.id} />
            <div className="vaccine-img-container">
              {pet.vaccination_image_url ? (
                <img
                  className="vaccine-img"
                  src={pet.vaccination_image_url}
                  alt="Vaccination"
                />
              ) : null}
            </div>
          </Layout.Content>
        </div>
      ))}
    </div>
  );
};

export default RenderPetProfile;
