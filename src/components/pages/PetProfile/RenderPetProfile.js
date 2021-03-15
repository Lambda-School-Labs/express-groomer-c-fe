import React, { useContext, useEffect } from 'react';
import { ProfileFormPO } from '../ProfileFormPO';
import { Layout, Avatar, Divider } from 'antd';
import { ControlFilled, UserOutlined } from '@ant-design/icons';
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
  let count = 0

  useEffect(() => {
    getPet(authState);
  }, []);

  const PetProfile = ({count}) => {
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
            <p className="heading" style={{marginLeft: '35px'}}>{pets[count]?.pet_name}</p>
          </div>
          <div className="pet-info-box">
            <div className="panel">
              <Divider style={{ borderColor: 'lightblue' }}>Pet Info</Divider>
              <div className="panel-info">
                <p>{`Breed: ${pets[count]?.pet_breed}`}</p>
                <p>{`Gender: ${pets[count]?.pet_gender}`}</p>
                <p>{`Color: ${pets[count]?.pet_color}`}</p>
                <p>{`Temperament: ${pets[count]?.pet_temperament}`}</p>
              </div>
            </div>
            <div className="panel">
              <Divider style={{ borderColor: 'lightblue' }}>Clinical Info</Divider>
              <div className="panel-info">
                <p>{`Spayed / Neutered: ${pets[count]?.spay_neuter ? 'Yes' : 'No'}`}</p>
                <p>{`Current on vaccines: ${pets[count]?.shots_current ? 'Yes' : 'No'}`}</p>
                <p>{`Special requests for groomer: ${pets[count]?.special_requests ? pets[count]?.special_requests : 'None'}`}</p>
              </div>
            </div>
          </div>
        </Layout.Content>
      </div>
    );
  }

  return (
    <PetProfile count={count} />
  )
};

export default RenderPetProfile;
