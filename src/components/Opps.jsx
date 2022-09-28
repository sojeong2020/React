import {data} from '../moc-data';
import {Link} from 'react-router-dom'
import { useState } from 'react';
import '../styles/opps.css';


const Opps = ({t}) => {

   const [opp,setOpp] = useState('');
   const [description,setDescription] = useState('');

      console.log(opp,description)
   const changeOpp = (e) => {
       setOpp(e.target.value)
     }

   const changeDescription = (e) => {
        setDescription(e.target.value)
      }
   
      const submitForm=(e)=>{
        e.preventDefault()
        const newOpp={opp,description}
        console.log(newOpp)

      }

return (
        <div>
            <h1>{t('opps.title')}</h1>
            <ul >
                {
                    data.map(opp => 

                        <Link to={`/opp/${opp.id}`}>
                         <div className='opp-list'>
                         <li key={opp.id}>{opp.name}</li>
                         </div>
                        </Link>
                    )
                }
               
                
            </ul>

            <div>
            <form onSubmit={submitForm}>
            <label>New Opp {opp} </label>
            <input type="text" onChange={changeOpp} value={opp} />
            <label>New description {description}</label>
            <input type="text" onChange={changeDescription} value={description} />
            <button type="submit">submit</button>
            </form>
     
    </div>

        </div>
    );
};

export default Opps;