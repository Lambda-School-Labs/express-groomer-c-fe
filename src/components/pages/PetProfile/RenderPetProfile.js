import React, { useContext } from 'react';
import { ProfileFormPO } from '../ProfileFormPO';
import { Layout, Avatar, Divider } from 'antd';
import { UserOutlined } from '@ant-design/icons';
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
  const [ pets ] = useContext(PetsContext)

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
          <p className="heading">
            {custInfo.given_name
              ? `${custInfo.given_name} ${custInfo.family_name}`
              : userInfo.given_name}{' '}
          </p>
        </div>
        <div className="pet-info-box">
          <div className="panel">
            <Divider style={{ borderColor: 'lightblue' }}>
              Pet Info
            </Divider>
            <div className="panel-info">
              <p>
                First Name:{' '}
                {custInfo.given_name
                  ? custInfo.given_name
                  : userInfo.given_name}
              </p>
              <p>
                Last Name:{' '}
                {custInfo.family_name
                  ? custInfo.family_name
                  : userInfo.family_name}
              </p>
              <p>Email: {userInfo.email}</p>
              <p>
                Phone Number:{' '}
                {custInfo.phone_number
                  ? custInfo.phone_number
                  : 'Update your profile'}
              </p>
            </div>
          </div>
          <div className="panel">
            <Divider style={{ borderColor: 'lightblue' }}>Clinical Info</Divider>
            <div className="panel-info">
              <p>
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
              </p>
            </div>
          </div>
        </div>
      </Layout.Content>
    </div>
  );
};

export default RenderPetProfile;
