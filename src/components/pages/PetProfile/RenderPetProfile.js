import React, { useContext, useEffect } from 'react';
import { ProfileFormPO } from '../ProfileFormPO';
import { Layout, Avatar, Divider } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useOktaAuth } from '@okta/okta-react'; // need this for getPet
import 'antd/dist/antd.css';
import './pet.scss';
// context imports
import { FormContext } from '../../../state/contexts/FormContext';
import { APIContext } from '../../../state/contexts/APIContext';
import { PetsContext } from '../../../state/contexts/PetsContext';

const RenderPetProfile = () => {
  // context state
  const { showForm } = useContext(FormContext);
  const { getPet } = useContext(APIContext);
  const { pets } = useContext(PetsContext);
  const { authState } = useOktaAuth(); // need this for getPet

  useEffect(() => {
    getPet(authState);
  }, []);

  return (
    <div>
      {showForm ? <ProfileFormPO /> : null}
      <Layout.Content
        style={{
          background: 'white',
          width: '75%',
          margin: '20px auto',
          padding: '10px',
        }}
      >
        <div className="avatar">
          <Avatar size={74} icon={<UserOutlined />} />
        </div>

        <div className="pet-header">
          <p className="heading">{pets[0]?.pet_name}</p>
        </div>
        <div className="pet-info-box">
          <div className="panel">
            <Divider style={{ borderColor: 'lightblue' }}>Pet Info</Divider>
            <div className="panel-info">
              <p>{`Breed: ${pets[0]?.pet_breed}`}</p>
              <p>{`Gender: ${pets[0]?.pet_gender}`}</p>
              <p>{`Color: ${pets[0]?.pet_color}`}</p>
              <p>{`Temperament: ${pets[0]?.pet_temperament}`}</p>
            </div>
          </div>
          <div className="panel">
            <Divider style={{ borderColor: 'lightblue' }}>
              Clinical Info
            </Divider>
            <div className="panel-info">
              <p>{`Spayed / Neutered: ${
                pets[0]?.spay_neuter ? 'Yes' : 'No'
              }`}</p>
              <p>{`Current on vaccines: ${
                pets[0]?.shots_current ? 'Yes' : 'No'
              }`}</p>
              <p>{`Special requests for groomer: ${pets[0]?.special_requests}`}</p>
            </div>
          </div>
        </div>
      </Layout.Content>
    </div>
  );
};

export default RenderPetProfile;
