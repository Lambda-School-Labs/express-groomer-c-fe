import React from 'react';
import MyPets from './MyPets';
import FavoriteGroomers from './FavoriteGroomers';
import './overview.scss';

export default function Overview() {
  return (
    <div>
      <div id="Upcoming-Appointments">
        <h1>Upcoming Appointments</h1>
      </div>

      <div id="My-Pets">
        <h1>My Pets</h1>
        <MyPets />
      </div>

      <div id="fav-Groomers">
        <h1>Favorite Groomers</h1>
        <FavoriteGroomers />
      </div>
    </div>
  );
}
