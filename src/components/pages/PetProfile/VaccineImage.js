import React, { useContext } from 'react';
import { CustomersContext } from '../../../state/contexts/CustomersContext';
// import { PetsContext } from '../../../state/contexts/PetsContext';
import FileUpload from '../../common/FileUpload';
import { Divider, Row } from 'antd';
import './pet.scss';

const VaccineImage = props => {
  const { custInfo } = useContext(CustomersContext);
  const pet = props.pet;

  return (
    <div>
      <Divider style={{ borderColor: 'lightblue' }}>
        Upload Pet Vaccination Image
      </Divider>
      <Row justify={'center'}>
        <FileUpload
          uploadUrl={`pets/vaccination-upload/${pet && pet.id}?customer_id=${
            custInfo.user_id
          }`}
        />
      </Row>
    </div>
  );
};

export default VaccineImage;
