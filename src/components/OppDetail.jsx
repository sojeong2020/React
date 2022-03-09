import React from 'react';
import { useParams } from 'react-router-dom';



const OppDetail = () => {

const {id} = useParams();

    return (
        <div>
            <p>Opp details - { id }</p>
             
        </div>
    );
};

export default OppDetail;