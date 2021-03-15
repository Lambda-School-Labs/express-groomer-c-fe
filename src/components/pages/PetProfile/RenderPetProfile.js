import React, { useContext, useEffect } from 'react';
import { ProfileFormPO } from '../ProfileFormPO';
import { Layout, Avatar, Divider } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useOktaAuth } from '@okta/okta-react'; // need this for getPet
import 'antd/dist/antd.css';
import './pet.scss';
// context imports
import { UsersContext } from '../../../state/contexts/UsersContext';
import { CustomersContext } from '../../../state/contexts/CustomersContext';
import { FormContext } from '../../../state/contexts/FormContext';
import { APIContext } from '../../../state/contexts/APIContext';
import { PetsContext } from '../../../state/contexts/PetsContext';

const RenderPetProfile = () => {
  // context state
  const { userInfo } = useContext(UsersContext);
  const { custInfo } = useContext(CustomersContext);
  const { showForm } = useContext(FormContext);
  const { getPet } = useContext(APIContext);
  const { pets, setPets } = useContext(PetsContext)
  const { authState } = useOktaAuth(); // need this for getPet

  useEffect(() => {
    getPet(authState)
  }, [])

  // console.log('getting pet')
  // getPet(authState)

  // console.log('Pets: ', pets)
  // console.log('Pet 0: ', pets[0])
  // console.log('Pet 1: ', pets[1])
  // console.log('Pet 0: ', pets[0]["pet_name"])
  // console.log('Pet 0: ', pets[0].pet_name)

  // let pet0 = pets[0]
  // console.log(pet0)
  // console.log(pet0.pet_name)
  // console.log(pets[0]?.pet_name, pets[0]?.pet_breed, pets[0]?.pet_temperament)
  // console.log(pets[1]?.pet_name)

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
            <Divider style={{ borderColor: 'lightblue' }}>
              Pet Info
            </Divider>
            <div className="panel-info">
              {/* <p>{`Name: ${pets[0]?.pet_name}`}</p> */}
              <p>{`Breed: ${pets[0]?.pet_breed}`}</p>
              <p>{`Gender: ${pets[0]?.pet_gender}`}</p>
              <p>{`Color: ${pets[0]?.pet_color}`}</p>
              <p>{`Temperament: ${pets[0]?.pet_temperament}`}</p>
            </div>
          </div>
          <div className="panel">
            <Divider style={{ borderColor: 'lightblue' }}>Clinical Info</Divider>
            <div className="panel-info">
              <p>{`Spayed / Neutered: ${pets[0]?.spay_neuter}`}</p>
              <p>{`Current on vaccines: ${pets[0]?.shots_current}`}</p>
              <p>{`Special requests for groomer: ${pets[0]?.special_requests}`}</p>
              {/* <p>
                Address:{' '}
                {custInfo.address ? custInfo.address : 'Update your profile'}
              </p>
              <p>
                City: {custInfo.city ? custInfo.city : 'Update your profile'}
              </p>
              <p>
                State: {custInfo.state ? custInfo.state : 'Update your profile'}
              </p>
              <p>
                Zip Code:{' '}
                {custInfo.zip_code ? custInfo.zip_code : 'Update your profile'}
              </p>
              <p>
                Country:{' '}
                {custInfo.country ? custInfo.country : 'Update your profile'}
              </p> */}
            </div>
          </div>
        </div>
      </Layout.Content>
    </div>
  );
};

export default RenderPetProfile;
