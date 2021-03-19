import React, { useContext } from 'react';
import { CustomersContext } from '../../../state/contexts/CustomersContext';
import FileUpload from '../../common/FileUpload';
import { Divider, Row } from 'antd';
import './pet.scss';

const VaccineImage = props => {
  const { custInfo } = useContext(CustomersContext);
  const thisPet = props.pet;

  return (
    <div>
      <Divider style={{ borderColor: 'lightblue' }}>
        Upload Pet Vaccination Image
      </Divider>

      <Row justify={'center'} style={{ width: '90%', margin: 'auto' }}>
        <FileUpload
          uploadUrl={`pets/vaccination-upload/${thisPet}?customer_id=${custInfo.user_id}`}
        />
      </Row>
    </div>
  );
};

export default VaccineImage;
