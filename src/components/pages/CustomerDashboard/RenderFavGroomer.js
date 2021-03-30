import React, { useContext } from 'react';
import { GroomersContext } from '../../../state/contexts/GroomersContext';
import { Card, Row } from 'antd';

// THIS FEATURE NEEDS TO BE CONNECTED TO THE FAV-GROOMERS BACKEND.

function RenderFavGroomer() {
  const { groomer } = useContext(GroomersContext);

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
