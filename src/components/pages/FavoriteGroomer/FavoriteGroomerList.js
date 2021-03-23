//===============//
//    IMPORTS    //
//===============//
import React, { useContext } from 'react';

import FavGroomerCard from './FavGroomerCard';


//===============//
//    Context    //
//===============//
import { FavGroomerContext } from '../../../state/contexts/FavGroomerContext';
import { FavGroomerContext } from '../../../state/contexts/PetsContext';


export default function FavoriteGroomerList() {
    const { groomer_favorites } = useContext(FavGroomerContext);
    let groomerId = [];

    let i;
    for (i = 0; i < groomers.length; i++){
        groomerId.push([groomers[i]?.groom_id]);
    }

    return (
        <div id="Groomer-Favs">
            {groomerId.map(groomer => (
                <div className="groomer-container" key={groomer}>
                    <p className="groomer-id">{groomer[0]}</p>
                  ))
            
        </div>
    )
}