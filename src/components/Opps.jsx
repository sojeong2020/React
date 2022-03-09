import React from 'react';
import {opps} from '../moc-data';
import {Link} from 'react-router-dom'
import '../styles/opps.css';


const Opps = () => {

   
   

    return (
        <div>
            <h1>List of Opportunities</h1>
            <ul >
                {
                    opps.map(opp => 

                        <Link to={`/opp/${opp.id}`}>
                         <div className='opp-list'>
                         <li key={opp.id}>{opp.name}</li>
                         </div>
                        </Link>
                    )
                }
               
                
            </ul>
        </div>
    );
};

export default Opps;