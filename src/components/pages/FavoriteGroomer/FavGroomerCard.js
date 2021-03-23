//===============//
//    IMPORTS    //
//===============//
import React from 'react';
import { Link } from 'react-router-dom';

const FavGroomerCard = ({ groomerName, id }) => {
    
    return (
        <Link to={`/groomerfavorites`}>
            <div className="groomer-card">
                <h3 className="groomer-name"> { groomerName }</h3>
            </div>
        </Link>
    )
}

export default FavGroomerCard;