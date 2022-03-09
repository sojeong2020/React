import React from 'react';
import '../styles/home.css';
import { Alert} from 'react-bootstrap';

const Home = ({t}) => {

    return (
        <div>

         <Alert variant="warning" className='text-center'>
         <Alert.Heading>{t('home.subtitle')}</Alert.Heading>
         <p>{t('home.title')} </p>
         <a href="https://training10.teamkinetic.co.uk/vk/admin/" class="alert-link">{t('home.link')}</a>
         </Alert>
         
        </div>
        
    );
};

export default Home;