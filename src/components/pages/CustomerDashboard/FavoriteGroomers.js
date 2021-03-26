import React, { useContext, useEffect } from 'react';
import { APIContext } from '../../../state/contexts/APIContext';
import { GroomersContext } from '../../../state/contexts/GroomersContext';
// import { Avatar } from 'antd';
// import { UserOutlined } from '@ant-design/icons';
import './overview.scss';

function FavoriteGroomers() {
  const { getGroomerByID } = useContext(APIContext);
  const { groomer } = useContext(GroomersContext);

  const groomerTest = () => {
    console.log('Running Groomer Test');
    getGroomerByID('00ulthapbErVUwVJy4x6');
    console.log(groomer, 'Groomer');
    // console.log(groomerTest);
  };

  useEffect(() => {
    groomerTest();
  }, []);

  return (
    <div id="fav-Groomers">
      <div className="fav-Groomers-container"></div>
      <p className="fav-Groomers-name">{groomer.business_name}</p>
    </div>
  );
}

export default FavoriteGroomers;
