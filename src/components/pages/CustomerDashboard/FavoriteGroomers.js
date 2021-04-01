import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import './overview.scss';

// THIS FEATURE IS HARDCODED AND NEEDS TO BE CONNECTED TO THE FAV GROOMERS BACKEND.

function FavoriteGroomers() {
  return (
    <div id="Groomers">
      <div className="fav-Groomers-container">
        <p className="fav-Groomers-name">HC Groomers</p>
        <div className="pet-avatar">
          <Avatar size={100} icon={<UserOutlined />} />
        </div>
      </div>
    </div>
  );
}

export default FavoriteGroomers;
