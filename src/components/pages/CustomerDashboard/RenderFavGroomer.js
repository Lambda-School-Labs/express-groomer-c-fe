import React, { useContext } from 'react';
import { APIContext } from '../../../state/contexts/APIContext';
import { GroomersContext } from '../../../state/contexts/GroomersContext';
import { Card, Row } from 'antd';

function RenderFavGroomer() {
  const { getGroomerByID } = useContext(APIContext);
  const { groomer } = useContext(GroomersContext);

  const groomerTest = () => {
    console.log('Running Groomer Test');
    getGroomerByID('00ulthapbErVUwVJy4x6');
    console.log(groomer, 'Groomer');
    // console.log(groomerTest);
  };
  groomerTest();

  return (
    <div>
      <Card
        title={groomer.business_name}
        bordered={false}
        style={{ width: 300 }}
      >
        <Row>
          <h3>{groomer.given_name}-</h3>
          <h3>{groomer.family_name}</h3>
        </Row>
        <p>{groomer.phone_number}</p>
      </Card>
    </div>
  );
}

export default RenderFavGroomer;
