import React from 'react';
import '../styles/home.css';
import { Alert} from 'react-bootstrap';

const Home = () => {

    return (
        <div>

         <Alert variant="warning" className='text-center'>
         <Alert.Heading>Covid 19 Community Tasks</Alert.Heading>
         <p>Looking for the covid specific community tasks? </p>
         <a href="https://training10.teamkinetic.co.uk/vk/admin/" class="alert-link">Open the app</a>
         </Alert>
         
        </div>
        
    );
};

export default Home;